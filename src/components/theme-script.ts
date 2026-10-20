export const THEME_STORAGE_KEY = "theme";

// Applique le thème choisi avant le premier rendu, pour éviter un flash.
export const themeScript = `try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="dark"||t==="light")document.documentElement.dataset.theme=t}catch(e){}`;
