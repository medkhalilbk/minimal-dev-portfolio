import SectionCard from '../ui/SectionCard';

function ExperienceItem({ item }) {
  const companyLink = item.url ? (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg font-semibold text-linkedin hover:underline"
    >
      {item.company}
    </a>
  ) : (
    <h3 className="text-lg font-semibold text-linkedin">{item.company}</h3>
  );

  return (
    <div className="border-b border-line py-5 last:border-0 last:pb-0 first:pt-0">
      <div className="flex gap-4">
        {item.logo && (
          item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded bg-white"
              aria-label={`${item.company} website`}
            >
              <img
                src={item.logo}
                alt=""
                className="max-h-10 max-w-10 object-contain"
              />
            </a>
          ) : (
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded bg-white">
              <img
                src={item.logo}
                alt=""
                className="max-h-10 max-w-10 object-contain"
              />
            </div>
          )
        )}

        <div className="min-w-0 flex-1">
          {companyLink}
          <p className="mt-1 text-sm text-dark">
            {item.role}, {item.location}
          </p>
          <p className="mt-0.5 text-sm text-muted">{item.period}</p>

          {item.appLink && (
            <p className="mt-2 text-sm">
              <a
                href={item.appLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-linkedin hover:underline"
              >
                {item.appLink.label} →
              </a>
            </p>
          )}

          {item.highlights?.length > 0 && (
            <ul className="mt-3 space-y-1">
              {item.highlights.map((point) => (
                <li key={point} className="text-sm leading-relaxed text-dark">
                  • {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Experience({ data }) {
  if (!data) return null;

  return (
    <SectionCard id="experience" title={data.title}>
      {data.items.map((item) => (
        <ExperienceItem key={item.id} item={item} />
      ))}
    </SectionCard>
  );
}
