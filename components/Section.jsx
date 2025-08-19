export default function Section({id, title, subtitle, children}){
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
        {subtitle && <p className="text-muted mt-2">{subtitle}</p>}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}
