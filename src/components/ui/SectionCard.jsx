export default function SectionCard({ id, title, children }) {
  return (
    <section id={id} className="section-card">
      {title && <h2 className="section-heading">{title}</h2>}
      {children}
    </section>
  );
}
