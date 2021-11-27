import { useState, useEffect } from "react";

export const useWindowSize = () => {
    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
        setSize(window.innerWidth);
    }, [window.innerWidth, size]);

    return [size, setSize];
};