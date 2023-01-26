import { useEffect, useState } from "react";

export default function themeControllers(){
    
    const initialStateDarkMode:boolean = localStorage.getItem('theme') === 'dark';
    const [darkMode,setDarkMode] = useState<boolean>(initialStateDarkMode);
    
    useEffect(()=>{
       if(darkMode){
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme','dark');
    }else{
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme','light');
        }
    },[darkMode]);

    return {darkMode,setDarkMode};

}