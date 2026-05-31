import SectionCard from '../ui/SectionCard';

function ProjectItem({ project, ui }) {
  const titleContent = project.links?.demo ? (
    <a
      href={project.links.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="text-base font-semibold text-linkedin hover:underline"
    >
      {project.title}
    </a>
  ) : (
    <h3 className="text-base font-semibold text-black">{project.title}</h3>
  );

  return (
    <div className="border-b border-line py-4 last:border-0 last:pb-0 first:pt-0">
      <div className="flex gap-4">
        {project.logo && (
          <a
            href={project.links?.demo || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded bg-black"
            aria-label={`${project.title} website`}
          >
            <img
              src={project.logo}
              alt=""
              className="max-h-10 max-w-10 object-contain"
            />
          </a>
        )}

        <div className="min-w-0 flex-1">
          {titleContent}
          <p className="mt-1 text-sm leading-relaxed text-dark">{project.description}</p>
          <p className="mt-2 text-sm text-muted">
            <span className="font-semibold text-black">{ui.labels.stack} </span>
            {project.tags.join(', ')}
          </p>
          {(project.links?.demo || project.links?.github) && (
            <p className="mt-2 text-sm">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-linkedin hover:underline"
                >
                  {ui.labels.visitSite}
                </a>
              )}
              {project.links.demo && project.links.github && (
                <span className="mx-2 text-muted">|</span>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-linkedin hover:underline"
                >
                  {ui.labels.github}
                </a>
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects({ data, ui }) {
  if (!data || !ui) return null;

  return (
    <SectionCard id="projects" title={data.title}>
      {data.items.map((project) => (
        <ProjectItem key={project.id} project={project} ui={ui} />
      ))}
    </SectionCard>
  );
}
