import React from "react";
import TitleSection from "../../../common/components/TitleSection";
import Private from "../components/Private";

const Privates: React.FC = () => {
  return (
    <section className="w-10/12 mx-auto mt-5 flex flex-col flex-wrap gap-7 py-2 px-0 overflow-x-hidden">
      <div className="p-3 flex items-center gap-2 justify-start">
        <TitleSection title="Privadas"/>
      </div>
      <div className="w-12/12 mt-5 flex flex-col md:flex-row flex-wrap gap-7 py-2 px-0 overflow-x-hidden">
        <Private />
        <Private />
        <Private />
        <Private />
        <Private />
      </div>
    </section>
  );
};

export default Privates;
