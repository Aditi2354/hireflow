'use client';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useRef } from 'react';

export default function NeoButton({ children, onClick, variant='primary', size='md', loading=false, className='', href, ...props }){
  const btnRef = useRef(null);
  const sizes = { sm:'px-4 py-2 text-sm rounded-xl', md:'px-5 py-3 text-sm rounded-2xl', lg:'px-7 py-4 text-base rounded-2xl' };
  const variants = {
    primary:'text-white bg-[rgb(var(--brand))] shadow-[0_8px_30px_rgba(139,92,246,0.25)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)]',
    outline:'text-page bg-transparent ring-1 ring-white/20 hover:bg-white/5',
    ghost:'text-page bg-white/10 hover:bg-white/15 ring-1 ring-white/15',
  };
  const base='relative inline-flex items-center gap-2 font-semibold transition-all duration-300 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/70';
  const handleClick=(e)=>{
    const el = btnRef.current; if(!el){ onClick?.(e); return; }
    const ripple=document.createElement('span'); const rect=el.getBoundingClientRect(); const size=Math.max(rect.width,rect.height);
    ripple.style.width=ripple.style.height=`${size}px`; ripple.style.left=`${e.clientX-rect.left-size/2}px`; ripple.style.top=`${e.clientY-rect.top-size/2}px`;
    ripple.className='pointer-events-none absolute rounded-full bg-white/30 animate-[ripple_650ms_ease-out]'; el.appendChild(ripple); setTimeout(()=>ripple.remove(),650);
    onClick?.(e);
  };
  const Comp = href ? 'a' : 'button';
  return (
    <motion.div whileHover={{ y:-1, scale:1.01 }} whileTap={{ scale:0.985 }} className="inline-block">
      <Comp ref={btnRef} onClick={handleClick} aria-busy={loading} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}{children}
        <span className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-white/10" />
      </Comp>
    </motion.div>
  );
}
