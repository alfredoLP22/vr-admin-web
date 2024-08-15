import React from "react";
import TitleSection from "../../../common/components/TitleSection";
import CardComunity from "../components/CardComunity";
import CategoryOption from "../components/CategoryOption";

const ComunityPage: React.FC = () => {
  return (
    <section className="w-10/12 mx-auto mt-5 flex flex-col flex-wrap gap-7 py-2 px-2">
      <div>
        <div className="p-3 flex items-center gap-2 justify-start">
          <TitleSection title="Comunidad" />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-1">
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center w-full gap-5">
          <CardComunity />
          <CardComunity />
          <CardComunity />
          <CardComunity />
          <CardComunity />
        </div>
        <CategoryOption />
      </div>
    </section>
  );
};

export default ComunityPage;
