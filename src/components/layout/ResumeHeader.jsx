export default function ResumeHeader({ profile, navigation }) {
  if (!profile || !navigation) return null;

  const resume = profile.resume;
  const isExternalResume = resume?.href?.startsWith('http');

  return (
    <header className="mb-8 text-center">
      {profile.photo && (
        <img
          src={profile.photo}
          alt={profile.photoAlt || profile.name}
          className="mx-auto mb-4 h-32 w-32 rounded-full border-2 border-line object-cover object-top shadow-card sm:h-36 sm:w-36"
        />
      )}

      <h1 className="text-3xl font-bold text-black sm:text-4xl">{profile.name}</h1>
      <p className="mt-1 text-base text-dark">{profile.title}</p>

      {resume && (
        <a
          href={resume.href}
          target={isExternalResume ? '_blank' : undefined}
          rel={isExternalResume ? 'noopener noreferrer' : undefined}
          download={!isExternalResume ? resume.fileName || undefined : undefined}
          className="resume-btn mt-4 inline-block"
        >
          {resume.label}
        </a>
      )}

      <nav className="mt-5 flex flex-wrap items-center justify-center gap-2">
        {navigation.sections.map((section) => (
          <a key={section.href} href={section.href} className="nav-pill">
            {section.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
