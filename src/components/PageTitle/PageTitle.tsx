import { useEffect, ReactNode } from "react";

type PageTitleProps = {
    children: ReactNode;
    title: string;
};

export const PageTitle = ({ children, title }: PageTitleProps) => {
    useEffect(() => {
      document.title = title;
    }, []);

    return children;  
};
