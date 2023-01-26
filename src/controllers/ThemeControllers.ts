 
 interface ThemeEntity{
    //Actions
    addThemeDark():void
    addThemeLight():void;
 }
export default class ThemeControlllers implements ThemeEntity{

    addThemeDark(): void {
        // Whenever the user explicitly chooses light mode
        localStorage.theme = 'light'
    }
    addThemeLight(): void {
        // Whenever the user explicitly chooses dark mode
        localStorage.theme = 'dark' 
    }


 }
  
 
