const TitleSection = ({ title }: { title: string }) => {
  return (
    <>
      <span className="w-3 h-3 bg-zuccini-950 rounded-full ring-2 ring-viridian-green-400"></span>
      <h3 className="font-bold text-2xl text-rock-blue-900 dark:text-viridian-green-50">
        {title}
      </h3>
    </>
  );
};

export default TitleSection;
