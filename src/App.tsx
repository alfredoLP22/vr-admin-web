import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import type { RootState } from "./app/store";
import Login from "./login/page/Login";
import Dashboard from "./private/pages/Dashboard/page/Dashboard";
import RouteProtected from "./private/Layout/RouteProtected";
import Privates from "./private/pages/Privates/page/Privates";
import MyPayments from "./private/pages/MyPayments/page/MyPayments";
import Residents from "./private/pages/Residents/page/Residents";
import GenerateTicket from "./private/pages/GenerateTicket/page/GenerateTicket";
import PayMaintenance from "./private/pages/PayMaintenance/page/PayMaintenance";
import Expenses from "./private/pages/Expenses/page/Expenses";
import ForgotPassword from "./login/page/ForgotPassword";
import RoutePublic from "./private/layout/RoutePublic";
import ResetPassword from "./login/page/ResetPassword";
import ComunityPage from "./private/pages/Comunity/page/ComunityPage";

function App() {
  // const [darkMode, setDarkMode] = useState(() => {
  //   const savedMode = localStorage.getItem("dark-mode");
  //   return savedMode ? JSON.parse(savedMode) : false;
  // });

  const darkModeStore = useSelector((state: RootState) => state.user.darkMode);

  useEffect(() => {
    if (darkModeStore) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("dark-mode", JSON.stringify(darkModeStore));
  }, [darkModeStore]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoutePublic />}>
          <Route index element={<Login />} />
          <Route path="recuperar-contrasena" element={<ForgotPassword />} />
          <Route path="12345" element={<ResetPassword />} />
        </Route>

        <Route path="/admin" element={<RouteProtected />}>
          <Route index element={<Dashboard />} />
          <Route path="mis-pagos" element={<MyPayments />} />
          <Route path="privadas" element={<Privates />} />
          <Route path="residentes" element={<Residents />} />
          <Route path="generar-recibos" element={<GenerateTicket />} />
          <Route path="egresos" element={<Expenses />} />
          <Route path="pagar-mantenimiento" element={<PayMaintenance />} />
          <Route path="comunidad" element={<ComunityPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
