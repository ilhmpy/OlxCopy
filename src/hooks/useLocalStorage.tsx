import { useState, useEffect } from "react";

export const useLocalStorage = (key: any, initial: any) => {
    const [value, setValue] = useState(() => localStorage.getItem(key) || initial);
    const lang = localStorage.getItem("lang");
    
    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value, lang]);
    
    return [value, setValue];
};