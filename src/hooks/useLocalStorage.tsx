import { useState, useEffect } from "react";

export const useLocalStorage = (key: any, initial: any) => {
    const [value, setValue] = useState(() => localStorage.getItem(key) || initial);
    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);
    return [value, setValue];
};