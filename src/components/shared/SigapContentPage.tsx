import LinkButton from '@/components/ui/button/LinkButton';

export type SigapContentSection = {
  title: string;
  description: string;
  points?: string[];
  audience?: string;
};

type SigapContentPageProps = {
  badge: string;
  title: string;
  description: string;
  sections: SigapContentSection[];
  ctaText?: string;
  ctaHref?: string;
};

const SigapContentPage = ({
  badge,
  title,
  description,
  sections,
  ctaText,
  ctaHref = '/signup',
}: SigapContentPageProps) => {
  return (
    <main className="bg-background-1">
      <section className="container mx-auto px-5 pb-16 pt-24 sm:px-10 lg:pb-24 lg:pt-32">
        <span className="badge badge-green">{badge}</span>
        <h1 className="mt-6 max-w-4xl text-4xl font-medium leading-tight text-foreground sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/70">{description}</p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="rounded-[20px] border border-border bg-background-2 p-7 sm:p-8">
              <h2 className="text-2xl font-medium text-foreground">{section.title}</h2>
              <p className="mt-4 leading-7 text-foreground/70">{section.description}</p>
              {section.points && section.points.length > 0 ? (
                <ul className="mt-5 space-y-3 text-foreground/80">
                  {section.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-6">
                      <span className="mt-2 size-2 shrink-0 rounded-full bg-primary-500" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.audience ? <p className="mt-6 text-sm font-medium text-primary-700">{section.audience}</p> : null}
            </article>
          ))}
        </div>

        {ctaText ? (
          <div className="mt-12">
            <LinkButton href={ctaHref} className="btn-primary hover:btn-secondary">
              {ctaText}
            </LinkButton>
          </div>
        ) : null}
      </section>
    </main>
  );
};

export default SigapContentPage;
