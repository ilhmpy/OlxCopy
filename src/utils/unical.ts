import { FavoritesViewModel } from "../types/favorites";

export function unical(id: number, favorites: FavoritesViewModel[]) {
    return !(favorites.filter((i) => i.id === id).length > 0);
};