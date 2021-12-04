import { useState, useEffect } from "react";

export const useLocalStorage = (key: any, initial: any) => {
    const [local, setLocal] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initial;
        } catch(error) {
            console.log(error);
            return initial;
        };
    });

    const changeValue = (value: any) => {
        try {
            const val = value instanceof Function ? value(local) : value;
            setLocal(val);
            localStorage.setItem(key, JSON.stringify(val));
        } catch (error) {
            console.log(error);
        };
    };
    
    return [local, changeValue];
};