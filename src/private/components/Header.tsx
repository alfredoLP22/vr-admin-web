import { Avatar, Popover } from "antd";
import Logout from "./Logout";

const Header = () => {
  return (
    <header className="flex justify-end px-8 bg-viridian-green-50 shadow-lg py-3">
      <div className="w-50 flex items-center gap-2">
        {/* <p>correo@correo.com</p> */}
        <Popover placement="bottom" content={<Logout />} arrow={true}>
          <Avatar className="bg-viridian-green-200 text-viridian-green-500 hover:ring-2 hover:ring-viridian-green-500 xs:w-20 w-11 h-11 cursor-pointer transition-all duration-300">
            <span className="font-bold">CA</span>
          </Avatar>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
