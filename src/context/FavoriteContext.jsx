import React, { createContext, useCallback, useMemo, useState } from 'react';

export const FavoriteContext = createContext({
  favorites: [],
  toggleFavorite: () => {},
  isFavorite: () => false
});

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = useCallback(id => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  }, []);

  const isFavorite = useCallback(
    id => favorites.includes(id),
    [favorites]
  );

  const value = useMemo(
    () => ({ favorites, toggleFavorite, isFavorite }),
    [favorites, toggleFavorite, isFavorite]
  );

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}