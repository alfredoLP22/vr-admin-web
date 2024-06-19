import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Enero",
    Egresos: 2400,
    Ingresos: 4000,
  },
  {
    name: "Febrero",
    Egresos: 1398,
    Ingresos: 3000,
  },
  {
    name: "Marzo",
    Egresos: 9800,
    Ingresos: 2000,
  },
  {
    name: "Abril",
    Egresos: 3908,
    Ingresos: 2780,
  },
  {
    name: "Mayo",
    Egresos: 4800,
    Ingresos: 1890,
  },
  {
    name: "Junio",
    Egresos: 3800,
    Ingresos: 2390,
  },
  {
    name: "Julio",
    Egresos: 3490,
    Ingresos: 4300,
  },
  {
    name: "Agosto",
    Egresos: 4300,
    Ingresos: 3490,
  },
  {
    name: "Septiembre",
    Egresos: 4100,
    Ingresos: 3190,
  },
  {
    name: "Octubre",
    Egresos: 4200,
    Ingresos: 2490,
  },
  {
    name: "Noviembre",
    Egresos: 3300,
    Ingresos: 1490,
  },
  {
    name: "Diciembre",
    Egresos: 4300,
    Ingresos: 3490,
  },
];

const dataIngresos = [
  { mes: "Enero", año: 2024, ingreso: 1000 },
  { mes: "Febrero", año: 2024, ingreso: 1500 },
  { mes: "Febrero", año: 2024, ingreso: 1500 },
  { mes: "Febrero", año: 2024, ingreso: 1500 },
  { mes: "Febrero", año: 2024, ingreso: 1500 },
  { mes: "Febrero", año: 2024, ingreso: 1500 },
  { mes: "Febrero", año: 2024, ingreso: 1500 },
  { mes: "Febrero", año: 2024, ingreso: 1500 },
];

const dataEgresos = [
  { mes: "Enero", año: 2024, egreso: 500 },
  { mes: "Febrero", año: 2024, egreso: 700 },
];

const Dashboard = () => {
  const [type, setType] = useState("");

  const handleOnChangeTYpe = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  };

  return (
    <section className="w-10/12 mx-auto mt-5 flex flex-col flex-wrap gap-7 py-2 px-0 overflow-x-hidden">
      <div>
        <div className="p-3 flex items-center gap-2 justify-start">
          <span className="w-3 h-3 bg-zuccini-950 rounded-full ring-2 ring-viridian-green-400"></span>
          <h3 className="font-bold text-2xl text-rock-blue-900 dark:text-viridian-green-50">
            Inicio
          </h3>
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-around items-center">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col">
            <label
              htmlFor="type"
              className="p-1 text-viridian-green-700 dark:text-viridian-green-50"
            >
              Tipo
            </label>
            <select
              id="type"
              onChange={handleOnChangeTYpe}
              className="w-40 p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border border-viridian-green-200"
            >
              <option value="">Ambos</option>
              <option value="egresos">Egresos</option>
              <option value="ingresos">Ingresos</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="year"
              className="p-1 text-viridian-green-700 dark:text-viridian-green-50"
            >
              Año
            </label>
            <select
              id="year"
              className="w-40 p-2 outline-gray-300 rounded-sm outline-none focus:outline-zuccini-700 border border-viridian-green-200"
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
          </div>
        </div>
        <p className="text-2xl py-2 text-viridian-green-700 my-3 dark:text-viridian-green-50">
          2024
        </p>
      </div>
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {type === "egresos" ? (
              <Area
                type="monotone"
                dataKey="Egresos"
                stroke="#ce3434"
                fill="#f5acac"
                style={{
                  filter: `drop-shadow(0px 0px 5px #ce3434)`,
                }}
              />
            ) : type === "ingresos" ? (
              <Area
                type="monotone"
                dataKey="Ingresos"
                stroke="#3e6357"
                fill="#91b7a8"
                style={{
                  filter: `drop-shadow(0px 0px 5px #3e6357)`,
                }}
              />
            ) : (
              <>
                <Area
                  type="monotone"
                  dataKey="Egresos"
                  stroke="#ce3434"
                  fill="#f5acac"
                  style={{
                    filter: `drop-shadow(0px 0px 5px #ce3434)`,
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="Ingresos"
                  stroke="#3e6357"
                  fill="#91b7a8"
                  style={{
                    filter: `drop-shadow(0px 0px 5px #3e6357)`,
                  }}
                />
              </>
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="w-12/12 mx-auto mt-5 flex gap-7 py-2 px-2 overflow-x-hidden">
        <div className="flex flex-col lg:flex-row gap-9">
          <div className="flex flex-col flex-wrap items-center justify-start">
            <h3 className="text-2xl text-viridian-green-700 my-3 dark:text-viridian-green-50">
              Ingresos
            </h3>
            <div className="overflow-auto max-h-96 shadow-md">
              <table className="min-w-full shadow-md shadow-green-100 divide-y divide-viridian-green-200 dark:divide-rock-blue-700">
                <thead className="bg-rock-blue-100 sticky top-0 z-10 dark:bg-rock-blue-950 dark:text-viridian-green-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-xs font-medium text-white uppercase"
                    >
                      Mes
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Año
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Ingreso
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-viridian-green-200 dark:bg-rock-blue-800 dark:divide-y-0">
                  {dataIngresos.map((row, index) => (
                    <tr
                      key={index}
                      className="dark:bg-rock-blue-950 dark:text-viridian-green-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-viridian-green-600 dark:text-viridian-green-50">
                        {row.mes}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-viridian-green-600 dark:text-viridian-green-50">
                        {row.año}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-viridian-green-600 dark:text-viridian-green-50">
                        {row.ingreso}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-rock-blue-100 dark:bg-rock-blue-950 sticky bottom-0 z-10">
                  <tr>
                    <td
                      colSpan={2}
                      className="px-6 py-3 text-left text-xs font-medium text-viridian-green-600 dark:text-viridian-green-50 uppercase tracking-wider"
                    >
                      Total
                    </td>
                    <td className="px-6 py-3 text-left text-xs font-medium text-viridian-green-600 dark:text-viridian-green-50 uppercase tracking-wider">
                      $3.00
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div className="flex flex-col flex-wrap items-center justify-start">
            <h3 className="text-2xl text-viridian-green-700 my-3 dark:text-viridian-green-50">
              Egresos
            </h3>
            <div className="overflow-auto max-h-96 shadow-md">
              <table className="min-w-full shadow-md shadow-green-100 divide-y divide-viridian-green-200 dark:divide-rock-blue-700">
                <thead className="bg-rock-blue-100 sticky top-0 z-10 dark:bg-rock-blue-950 dark:text-viridian-green-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-xs font-medium text-white uppercase"
                    >
                      Mes
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Año
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      Egreso
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-viridian-green-200 dark:bg-rock-blue-800 dark:divide-y-0">
                  {dataEgresos.map((row, index) => (
                    <tr
                      key={index}
                      className="dark:bg-rock-blue-950 dark:text-viridian-green-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-viridian-green-600 dark:text-viridian-green-50">
                        {row.mes}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-viridian-green-600 dark:text-viridian-green-50">
                        {row.año}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-viridian-green-600 dark:text-viridian-green-50">
                        {row.egreso}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-rock-blue-100 dark:bg-rock-blue-950 sticky bottom-0 z-10">
                  <tr>
                    <td
                      colSpan={2}
                      className="px-6 py-3 text-left text-xs font-medium text-viridian-green-600 dark:text-viridian-green-50 uppercase tracking-wider"
                    >
                      Total
                    </td>
                    <td className="px-6 py-3 text-left text-xs font-medium text-viridian-green-600 dark:text-viridian-green-50 uppercase tracking-wider">
                      $3.00
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div className="flex flex-col-reverse mt-3 w-32 p-11 lg:h-12 items-center justify-center px-2 dark:bg-rock-blue-950 bg-wild-sand-50 rounded-lg shadow-md">
            <p className="text-lg text-center text-rock-blue-700 dark:text-viridian-green-50 flex flex-col gap-2">
              Balance
            </p>
            <span className="text-roman-500 text-3xl font-extrabold">
              -$100
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
