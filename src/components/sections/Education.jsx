import SectionCard from '../ui/SectionCard';

function EducationItem({ item }) {
  return (
    <div className="border-b border-line py-4 last:border-0 last:pb-0 first:pt-0">
      <h3 className="text-base font-semibold text-black">{item.degree}</h3>
      <p className="mt-1 text-sm text-dark">{item.institution}</p>
      <p className="mt-0.5 text-sm text-muted">{item.period}</p>
    </div>
  );
}

export default function Education({ data }) {
  if (!data) return null;

  return (
    <SectionCard id="education" title={data.title}>
      {data.items.map((item) => (
        <EducationItem key={item.id} item={item} />
      ))}
    </SectionCard>
  );
}
