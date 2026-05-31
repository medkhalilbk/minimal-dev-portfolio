import SectionCard from '../ui/SectionCard';

function SkillRow({ category }) {
  return (
    <div className="skill-row">
      <span className="skill-label">{category.label}: </span>
      <span className="text-dark">{category.skills.join(', ')}</span>
    </div>
  );
}

export default function Skills({ data }) {
  if (!data) return null;

  return (
    <SectionCard id="skills" title={data.title}>
      {data.categories.map((category) => (
        <SkillRow key={category.id} category={category} />
      ))}
    </SectionCard>
  );
}
