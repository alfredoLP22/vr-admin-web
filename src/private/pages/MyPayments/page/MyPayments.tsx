import React from "react";
import TitleSection from "../../../common/components/TitleSection.tsx";
import Payment from "../components/Payment.tsx";

const MyPayments: React.FC = () => {
  return (
    <section className="w-10/12 mx-auto mt-5 flex flex-col flex-wrap gap-7 py-2 px-0 overflow-x-hidden">
      <div>
        <div className="p-3 flex items-center gap-2 justify-start">
          <TitleSection title="Mis pagos" />
        </div>
      </div>
      <div className="flex flex-wrap gap-7 px-2">
        <Payment />
        <Payment />
        <Payment />
        <Payment />
        <Payment />
        <Payment />
        <Payment />
        <Payment />
        <Payment />
        <Payment />
        <Payment />
        <Payment />
        <Payment />
        <Payment />
        <Payment />
        <Payment />
        <Payment />
        <Payment />
        <Payment />
        <Payment />
        <Payment />
        <Payment />
        <Payment />
        <Payment />
      </div>
    </section>
  );
};

export default MyPayments;
