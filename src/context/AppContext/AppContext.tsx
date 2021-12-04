import { createContext } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { FavoritesViewModel } from "../../types/favorites";
import { ReactNode, FC } from "react";

type AppContextFields = {
    favorites: FavoritesViewModel[];
    setFavorites: (val: FavoritesViewModel) => any;
};

type AppContextProviderType = {
    children: ReactNode;
};

const AppContext = createContext<AppContextFields>({
    favorites: [],
    setFavorites: (val: FavoritesViewModel) => undefined,
});

export const AppContextProvider: FC<AppContextProviderType> = ({ children }: AppContextProviderType) => {
    const [favorites, setFavorites] = useLocalStorage("favs", []);
   
    return (
        <AppContext.Provider value={{
            favorites,
            setFavorites
        }}>
            {children}
        </AppContext.Provider>
    );  
};