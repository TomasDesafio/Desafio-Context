// context.js
import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

export const MyContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [photosfavoritas,setPhotosfavoritas]=useState([]);
  const [isFavorite, setisFavorite] = useState(false);

  return (
    <MyContext.Provider value={{ photos, setPhotos,photosfavoritas,setPhotosfavoritas,isFavorite, setisFavorite }}>
      {children}
    </MyContext.Provider>
  );
};