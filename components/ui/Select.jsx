// components/ui/Select.jsx
"use client";

import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

/* tiny clsx helper (no external dep) */
function cx(...a) {
  return a
    .flatMap(v => typeof v === "string" ? [v] : (v && typeof v === "object" ? Object.entries(v).filter(([,b])=>!!b).map(([k])=>k) : []))
    .join(" ");
}

const SelectCtx = createContext(null);

export function Select({ value, defaultValue, onValueChange, children }) {
  const [open, setOpen] = useState(false);
  const [internal, setInternal] = useState(defaultValue ?? "");
  const controlled = typeof value !== "undefined";
  const currentValue = controlled ? value : internal;

  const setValue = (v) => {
    if (!controlled) setInternal(v);
    onValueChange?.(v);
  };

  const [labels, setLabels] = useState({}); // value -> label text

  const registerItem = (val, label) => {
    setLabels(prev => ({ ...prev, [val]: label }));
  };

  const ctx = useMemo(() => ({ open, setOpen, currentValue, setValue, labels, registerItem }), [open, currentValue, labels]);

  return <SelectCtx.Provider value={ctx}>{children}</SelectCtx.Provider>;
}

export function SelectTrigger({ className = "", children, ...rest }) {
  const { open, setOpen } = useContext(SelectCtx);
  const ref = useRef(null);
  // expose anchor for content
  useEffect(() => {
    if (ref.current) {
      ref.current.dataset.selectAnchor = "true";
    }
  }, []);

  return (
    <button
      ref={ref}
      type="button"
      className={cx(
        "w-full rounded-xl bg-white/10 px-4 py-3 text-white ring-1 ring-white/15",
        "hover:bg-white/15 transition shadow-lg",
        open && "ring-2 ring-violet-400/60",
        className
      )}
      onClick={() => setOpen(o => !o)}
      {...rest}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="truncate">{children}</div>
        <svg className={cx("h-4 w-4 shrink-0 transition-transform", open && "rotate-180")} viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
        </svg>
      </div>
    </button>
  );
}

export function SelectValue({ placeholder = "Select…" }) {
  const { currentValue, labels } = useContext(SelectCtx);
  return currentValue ? <span>{labels[currentValue] ?? currentValue}</span> : <span className="text-white/60">{placeholder}</span>;
}

export function SelectContent({ className = "", children }) {
  const { open, setOpen } = useContext(SelectCtx);
  const contentRef = useRef(null);
  const anchorRef = useRef(null);
  const [style, setStyle] = useState({ top: 0, left: 0, width: 0 });

  // find nearest trigger (data-select-anchor)
  useEffect(() => {
    if (!open) return;
    const el = document.querySelector('[data-select-anchor="true"]:last-of-type');
    anchorRef.current = el || null;

    function place() {
      const a = anchorRef.current;
      if (!a) return;
      const rect = a.getBoundingClientRect();
      const top = rect.bottom + window.scrollY + 8; // gap
      const left = rect.left + window.scrollX;
      setStyle({ top, left, width: rect.width });
    }
    place();

    const ro = new ResizeObserver(place);
    anchorRef.current && ro.observe(anchorRef.current);
    window.addEventListener("scroll", place, true);
    window.addEventListener("resize", place);

    // close on outside click / esc
    function onDoc(e) {
      if (!contentRef.current) return;
      if (
        !contentRef.current.contains(e.target) &&
        !anchorRef.current?.contains(e.target)
      ) setOpen(false);
    }
    function onKey(e) { if (e.key === "Escape") setOpen(false); }

    document.addEventListener("mousedown", onDoc);
    document.addEventListener("touchstart", onDoc);
    document.addEventListener("keydown", onKey);

    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", place, true);
      window.removeEventListener("resize", place);
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("touchstart", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, setOpen]);

  if (!open) return null;

  const panel = (
    <div
      ref={contentRef}
      className={cx(
        "z-[1000] fixed rounded-xl bg-black/90 text-white ring-1 ring-white/20 shadow-2xl",
        "backdrop-blur-md overflow-y-auto max-h-[280px] p-1",
        className
      )}
      style={{ top: style.top, left: style.left, width: style.width }}
      role="listbox"
    >
      {children}
    </div>
  );

  return createPortal(panel, document.body);
}

export function SelectItem({ value, children, className = "" }) {
  const { currentValue, setValue, setOpen, registerItem } = useContext(SelectCtx);
  const ref = useRef(null);

  useEffect(() => {
    const labelText = typeof children === "string" ? children : ref.current?.textContent?.trim() || String(value);
    registerItem?.(value, labelText);
  }, [children, value, registerItem]);

  const selected = currentValue === value;

  const onClick = () => { setValue(value); setOpen(false); };

  // basic keyboard nav within listbox
  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(); }
  };

  return (
    <div
      ref={ref}
      role="option"
      aria-selected={selected}
      tabIndex={0}
      className={cx(
        "px-3 py-2.5 rounded-lg cursor-pointer select-none",
        "hover:bg-white/10 focus:bg-white/10 outline-none",
        selected && "bg-violet-500/25 ring-1 ring-violet-400/40",
        className
      )}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {children}
    </div>
  );
}
