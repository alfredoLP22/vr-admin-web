import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./login/components/Login";
import Dashboard from "./dashboard/page/Dashboard";
import RouteProtected from "./private/Layout/RouteProtected";
import Privates from "./privates/page/Privates";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route index element={<Login />}/>
        </Route>

        <Route path="/admin" element={<RouteProtected />}>
          <Route index element={<Dashboard />}/>
          <Route path="privates" element={<Privates />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
