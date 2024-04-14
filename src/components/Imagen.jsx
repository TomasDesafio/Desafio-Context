import React, { useState } from 'react';
import { useMyContext } from '../context/PhotosContext';
import IconHeart from './IconHeart';


const ImageCard = ({ photo }) => {
    const { photos, setPhotos,photosfavoritas,setPhotosfavoritas,isFavorite, setisFavorite } = useMyContext();

    const handleLike = (id) => {
        //e.preventDefault();
        const imagenfavorita=photos.find((photo) =>photo.id === id);
        setPhotosfavoritas([...photosfavoritas, imagenfavorita]);
        setisFavorite(!isFavorite)
        
      
      };
    
  
    return (
      <div className="image-card">
        <img key={photo.id} src={photo.src.small} alt={photo.alt} />
          <div className="photo-details">
            <h3>{photo.alt}</h3>
            <p>Fotógrafo: {photo.photographer}</p>
            <button onClick={() => handleLike(photo.id)}> {isFavorite ? <IconHeart filled="red" /> : <IconHeart filled="" />}  </button>
            
         
          </div>


       
      </div>
    );
  };
  
  export default ImageCard;