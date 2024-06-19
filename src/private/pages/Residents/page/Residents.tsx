import { useState } from "react";
import AddResident from "../components/AddResident";
import { DataType } from "../interfaces/table.interface";

const Residents = () => {
  
  // const columns = [
  //   {
  //     title: "Nombre",
  //     width: 100,
  //     dataIndex: "name",
  //     key: "name",
  //     fixed: "left",
  //   },
  //   {
  //     title: "Privada",
  //     width: 100,
  //     dataIndex: "private",
  //     key: "private",
  //     sorter: true,
  //   },
  //   {
  //     title: "N casa",
  //     dataIndex: "numberHouse",
  //     key: "numberHouse",
  //     sorter: true,
  //   },
  //   { title: "Telefono", dataIndex: "phone", key: "phone" },
  //   { title: "Correo", dataIndex: "email", key: "email" },
  //   {
  //     title: "Action",
  //     key: "operation",
  //     width: 100,
  //     render: () => <a>action</a>,
  //   },
  // ];

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      private: "John Brown",
      numberHouse: 32,
      phone: "898989",
      email: "New York Park",
    },
    {
      key: "2",
      name: "Jane Smith",
      private: "Jane Smith",
      numberHouse: 45,
      phone: "123456",
      email: "Los Angeles",
    },
    {
      key: "3",
      name: "Michael Johnson",
      private: "Michael Johnson",
      numberHouse: 21,
      phone: "789012",
      email: "Chicago",
    },
    // Agrega más datos según sea necesario
  ];

  const [isInviteResident, setIsInviteResident] = useState(false);
  const [isInviteResidentVisible, setIsInviteResidentVisible] = useState(false);

  const openInviteResident = () => {
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
          <span className="w-3 h-3 bg-zuccini-950 rounded-full ring-2 ring-viridian-green-400"></span>
          <h3 className="font-bold text-2xl text-rock-blue-900 dark:text-viridian-green-50">
            Residentes
          </h3>
        </div>
        <button
          onClick={() => openInviteResident()}
          className="p-2 bg-zuccini-800 hover:bg-zuccini-600 rounded-sm text-viridian-green-50 flex items-center justify-center gap-1"
        >
          Invitar residente
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
                N casa
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Telefono
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Correo
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
                <td className="px-6 py-4 whitespace-nowrap text-sm text-viridian-green-600 dark:text-viridian-green-50">
                  {row.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isInviteResidentVisible && (
        <AddResident
          closeInviteResident={closeInviteResident}
          isInviteResident={isInviteResident}
        />
      )}
    </section>
  );
};

export default Residents;
