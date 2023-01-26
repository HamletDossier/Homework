
import { useEffect, useRef, useState } from "react";
import ThemeControlllers from "../controllers/ThemeControllers";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";
const Header = () => {
   const modeTheme = new ThemeControlllers();

   const initialStateDarkMode:boolean = localStorage.getItem('theme') === 'dark';
   const [darkMode,setDarkMode] = useState<boolean>(initialStateDarkMode);

   useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme','dark');
    }
    else{
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme','light');
    }
   },[darkMode]);

   
  return (
  <header className="container mx-auto px-4 pt-8" >
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