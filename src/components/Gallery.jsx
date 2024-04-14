// Gallery.js (o cualquier otro componente donde necesites acceder a photos)
import React, { useState,useEffect } from 'react';
import { useMyContext } from '../context/PhotosContext';
import IconHeart from './IconHeart';
import Imagen from'./Imagen';


const Gallery = () => {
  const { photos, setPhotos,photosfavoritas,setPhotosfavorita } = useMyContext();
  

  useEffect(() => {
    // Aquí puedes cargar los datos del JSON
    // por ejemplo, usando fetch
    fetch('photos.json')
      .then(response => response.json())
      .then(data => setPhotos(data.photos))
      .catch(error => console.error('Error al cargar datos:', error));
  }, [setPhotos]);




  




  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo,index) => (
        <div key={photo.id} className="photo-card">
          <Imagen  key ={index} photo={photo}/>
          
          
        </div>
      ))}
    </div>
  );
};

export default Gallery;