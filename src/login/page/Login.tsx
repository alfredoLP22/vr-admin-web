import React from "react";
import "../styles/login.css";
import FormLogin from "../components/FormLogin";
import BackGround from "../components/BackGround";

const Login: React.FC = () => {

  return (
    <div className="container-login flex-col md:flex-row">
      <BackGround />
      <div className="md:w-4/4 w-100-vw lg:w-[100vw] h-screen dark:bg-rock-blue-950">
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
