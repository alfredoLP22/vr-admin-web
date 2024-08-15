import React, { useState } from "react";
import AddExpense from "../components/AddExpense";
import TitleSection from "../../../common/components/TitleSection";

const Expenses: React.FC = () => {
  interface DataType {
    key: React.Key;
    name: string;
    private: string;
    numberHouse: number;
    phone: string;
  }

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      private: "John Brown",
      numberHouse: 32,
      phone: "898989",
    },
    {
      key: "2",
      name: "Jane Smith",
      private: "Jane Smith",
      numberHouse: 45,
      phone: "123456",
    },
    {
      key: "3",
      name: "Michael Johnson",
      private: "Michael Johnson",
      numberHouse: 21,
      phone: "789012",
    },
    // Agrega más datos según sea necesario
  ];

  const [isInviteResident, setIsInviteResident] = useState(false);
  const [isInviteResidentVisible, setIsInviteResidentVisible] = useState(false);

  const openExpenseForm = () => {
    setIsInviteResidentVisible(true);
    setTimeout(() => {
      setIsInviteResident(true);
    }, 10);
  };

  const closeInviteResident = () => {
    setIsInviteResident(false);
    setTimeout(() => {
      setIsInviteResidentVisible(false);
    }, 300);
  };
  return (
    <section className="w-10/12 mx-auto mt-5 flex flex-col flex-wrap gap-7 py-2 px-0 overflow-x-hidden">
      <div className="p-2 flex flex-col md:flex-row items-start md:items-center gap-2 justify-between">
        <div className="flex items-center gap-2">
          <TitleSection title="Egresos" />
        </div>
        <button
          onClick={() => openExpenseForm()}
          className="p-2 bg-zuccini-800 hover:bg-zuccini-600 rounded-sm text-viridian-green-50 flex items-center justify-center gap-1"
        >
          Agregar egreso
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      <div className="overflow-x-auto max-h-96 shadow-md w-[99%] sm:w-full">
        <table className="min-w-full shadow-md shadow-green-100 divide-y divide-viridian-green-200 dark:divide-rock-blue-700">
          <thead className="bg-rock-blue-100 dark:bg-rock-blue-950 dark:text-viridian-green-50 sticky top-0 z-10">
            <tr>
              <th
                scope="col"
                className="px-6 py-4 text-left text-xs font-medium text-white uppercase"
              >
                Nombre
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Privada
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Monto
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Cantidad
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-viridian-green-200 dark:divide-y-0 dark:bg-rock-blue-800">
            {data.map((row, index) => (
              <tr
                key={index}
                className="dark:bg-rock-blue-950 dark:text-viridian-green-50"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-viridian-green-600 dark:text-viridian-green-50">
                  {row.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-viridian-green-600 dark:text-viridian-green-50">
                  {row.private}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-viridian-green-600 dark:text-viridian-green-50">
                  {row.numberHouse}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-viridian-green-600 dark:text-viridian-green-50">
                  {row.phone}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isInviteResidentVisible && (
        <AddExpense
          closeInviteResident={closeInviteResident}
          isInviteResident={isInviteResident}
        />
      )}
    </section>
  );
};

export default Expenses;
