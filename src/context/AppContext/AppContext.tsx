import { createContext, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { FavoritesViewModel } from "../../types/favorites";
import { ReactNode, FC } from "react";
import { Notify } from "../../components/Notify/Notify";

type AppContextFields = {
    favorites: FavoritesViewModel[];
    setFavorites: (val: FavoritesViewModel[]) => any;
    call: boolean;
    setCall: (val: boolean) => void;
    setText: (val: string) => void;
};

type AppContextProviderType = {
    children: ReactNode;
};

export const AppContext = createContext<AppContextFields>({
    favorites: [],
    setFavorites: (val: FavoritesViewModel[]) => undefined,
    call: false,
    setCall: (val: boolean) => undefined,
    setText: (val: string) => undefined,
});

export const AppContextProvider: FC<AppContextProviderType> = ({ children }: AppContextProviderType) => {
    const [favorites, setFavorites] = useLocalStorage("favs", []);
    const [call, setCall] = useState<boolean>(false);
    const [text, setText] = useState<string>("");
   
    return (
        <AppContext.Provider value={{
            favorites,
            setFavorites,
            call,
            setCall,
            setText,
        }}>
            <>
                <Notify call={call} text={text} />                
                {children}
            </>
        </AppContext.Provider>
    );  
};