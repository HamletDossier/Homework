
import { useEffect, useRef, useState } from "react";
import ThemeControlllers from "../controllers/ThemeControllers";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";
const Header = () => {
  const {darkMode,setDarkMode} = ThemeControlllers();
  return (
  <header className="container mx-auto px-4 pt-8 md:max-w-xl" >
  <div className="flex justify-between">
    <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">Todo</h1>
    <button onClick={() => setDarkMode(!darkMode)}>
      {
        darkMode ? <SunIcon />  : <MoonIcon />
      }
      </button>
  </div>
  </header>
  );
}

export default Header;