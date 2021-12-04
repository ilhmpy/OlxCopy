import { useState, useEffect } from "react";

export const useLocalStorage = (key: any, initial: any) => {
    const [value, setValue] = useState(() => localStorage.getItem(key) || initial);
    const lang = localStorage.getItem("lang");
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value, lang]);
    
    return [JSON.parse(value), setValue];
};