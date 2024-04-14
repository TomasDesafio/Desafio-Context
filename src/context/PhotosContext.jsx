// context.js
import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

export const MyContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [photosfavoritas,setPhotosfavoritas]=useState([]);

  return (
    <MyContext.Provider value={{ photos, setPhotos,photosfavoritas,setPhotosfavoritas }}>
      {children}
    </MyContext.Provider>
  );
};