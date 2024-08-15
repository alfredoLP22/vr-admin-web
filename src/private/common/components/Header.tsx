import { useEffect } from "react";
import { Avatar, Popover } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Logout from "./Logout";
import type { RootState } from "../../../app/store";
import "../../../index.css";
import { setDarkMode } from "../../../features/user/userSlice";

const Header = () => {
  const userDispatch = useDispatch();
  const darkModeStore = useSelector((state: RootState) => state.user.darkMode);

  const changeDarkMode = (mode: boolean) => {
    userDispatch(setDarkMode(mode));
  };

  useEffect(() => {
    if (darkModeStore) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("dark-mode", JSON.stringify(darkModeStore));
  }, [darkModeStore]);

  return (
    <header className="flex justify-end px-8 bg-viridian-green-50 dark:bg-rock-blue-950 shadow-lg py-3">
      <div className="w-50 flex items-center gap-2">
        <button
          onClick={() => changeDarkMode(!darkModeStore)}
          className="p-2 border border-viridian-green-500 rounded-full bg-rock-blue-100 dark:bg-rock-blue-950 dark:text-viridian-green-50 dark:hover:bg-rock-blue-800 hover:bg-rock-blue-200"
        >
          {darkModeStore ? (
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
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          ) : (
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
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          )}
        </button>
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
