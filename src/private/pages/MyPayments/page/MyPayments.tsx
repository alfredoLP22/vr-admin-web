import Payment from "../components/Payment.tsx";

const MyPayments = () => {
  return (
    <section className="w-10/12 mx-auto mt-5 flex flex-col flex-wrap gap-7 py-2 px-0 overflow-x-hidden">
      <div>
        <div className="p-3 flex items-center gap-2 justify-start">
          <span className="w-3 h-3 bg-zuccini-950 rounded-full ring-2 ring-viridian-green-400"></span>
          <h3 className="font-bold text-2xl text-rock-blue-900 dark:text-viridian-green-50">Mis pagos</h3>
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
