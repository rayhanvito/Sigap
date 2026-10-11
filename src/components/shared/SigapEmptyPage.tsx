type SigapEmptyPageProps = {
  badge: string;
  title: string;
  description: string;
};

const SigapEmptyPage = ({ badge, title, description }: SigapEmptyPageProps) => {
  return (
    <main className="bg-background-1">
      <section className="container mx-auto px-5 pb-24 pt-24 sm:px-10 lg:pb-32 lg:pt-36">
        <span className="badge badge-green">{badge}</span>
        <h1 className="mt-6 max-w-3xl text-4xl font-medium leading-tight text-foreground sm:text-5xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/70">{description}</p>
      </section>
    </main>
  );
};

export default SigapEmptyPage;
