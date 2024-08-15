import React from "react";
import Logo from "../../assets/Logo.png";

const BackGround: React.FC = () => {
  return (
    <div className="bg-zuccini-950 flex items-center justify-center">
      <figure>
        <img className="img-login" src={Logo} alt="logo" loading="lazy" />
      </figure>
    </div>
  );
};

export default BackGround;
