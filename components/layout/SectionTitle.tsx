interface Props {
  title: string;
  url?: string;
}
const SectionTitle = ({ title, url }: Props) => {
  return (
    <div
      className={` flex mb-10 ${
        url
          ? "xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row items-center xs:justify-center sm:justify-center md:justify-between lg:justify-between xl:justify-between"
          : "items-center jxs:justify-center sm:justify-center md:justify-start lg:justify-start xl:justify-start"
      }`}
    >
      <h2 className="font-ClashGroteskMedium text-3xl">{title}</h2>
      {url && <h3>{url}</h3>}
    </div>
  );
};

export default SectionTitle;
