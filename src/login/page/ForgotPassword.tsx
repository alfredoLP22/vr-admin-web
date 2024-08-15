import React from "react";
import BackGround from "../components/BackGround";
import FormChangePassword from "../components/FormChangePassword";

const ForgotPassword: React.FC = () => {
  return (
    <div className="container-login md:flex">
      <BackGround />
      <div className="md:w-4/4 w-100-vw lg:w-[100vw] h-screen dark:bg-rock-blue-950">
        <FormChangePassword />
      </div>
    </div>
  );
};

export default ForgotPassword;
