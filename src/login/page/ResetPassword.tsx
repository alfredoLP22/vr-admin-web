import React from "react";
import "../styles/login.css";
import FormResetPassword from "../components/FormResetPassword";
import BackGround from "../components/BackGround";

const ResetPassword: React.FC = () => {
  return (
    <div className="container-login md:flex">
      <BackGround />
      <div className="md:w-4/4 w-100-vw lg:w-[100vw] h-screen dark:bg-rock-blue-950">
        <FormResetPassword />
      </div>
    </div>
  );
};

export default ResetPassword;
