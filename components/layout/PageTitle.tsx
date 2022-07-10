interface Props {
  title: string;
}
const PageTitle = ({ title }: Props) => {
  return (
    <section className="max-w-6xl mx-auto py-10 flex items-center justify-center flex-col xs:w-11/12 sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-full">
      <h1 className="uppercase font-ClashGroteskMedium text-center tracking-widest text-lg text-zinc-600 dark:text-zinc-400">
        {title}
      </h1>
    </section>
  );
};

export default PageTitle;
