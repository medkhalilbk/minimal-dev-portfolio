import SectionCard from '../ui/SectionCard';

export default function Summary({ data }) {
  if (!data) return null;

  return (
    <SectionCard id="summary" title={data.summaryTitle}>
      <p className="text-sm leading-relaxed text-dark">{data.summary}</p>
    </SectionCard>
  );
}
