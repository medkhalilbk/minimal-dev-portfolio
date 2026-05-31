import SectionCard from '../ui/SectionCard';

function ContactRow({ item }) {
  const content = (
    <div className="skill-row">
      <span className="skill-label">{item.label}: </span>
      <span className="text-dark">{item.value}</span>
    </div>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        target={item.href.startsWith('http') ? '_blank' : undefined}
        rel="noopener noreferrer"
        className="block transition-colors hover:text-linkedin"
      >
        {content}
      </a>
    );
  }

  return content;
}

export default function Contact({ data }) {
  if (!data) return null;

  return (
    <SectionCard id="contact" title={data.title}>
      {data.items.map((item) => (
        <ContactRow key={item.id} item={item} />
      ))}
    </SectionCard>
  );
}
