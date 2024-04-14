// Gallery.js (o cualquier otro componente donde necesites acceder a photos)
import React, { useState,useEffect } from 'react';
import { useMyContext } from '../context/PhotosContext';
import IconHeart from './IconHeart';


const Gallery = () => {
  const { photos, setPhotos,photosfavoritas,setPhotosfavoritas } = useMyContext();
  const [Like, setLike] = useState('');

  useEffect(() => {
    // Aquí puedes cargar los datos del JSON
    // por ejemplo, usando fetch
    fetch('photos.json')
      .then(response => response.json())
      .then(data => setPhotos(data.photos))
      .catch(error => console.error('Error al cargar datos:', error));
  }, [setPhotos]);

  const handleLike = (id) => {
    //e.preventDefault();
    const imagenfavorita=photos.find((photo) =>photo.id === id);
    setPhotosfavoritas([...photosfavoritas, imagenfavorita]);
    setLike('true')
    
  
  };

  //console.log(photos)

 //const photosnuevas=photos.map((photo)=>photo['estado']='')
 //console.log(photosnuevas)






  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map(photo => (
        <div key={photo.id} className="photo-card">
          
          <img src={photo.src.small} alt={photo.alt} />
          <div className="photo-details">
            <h3>{photo.alt}</h3>
            <p>Fotógrafo: {photo.photographer}</p>
            <button onClick={() => handleLike(photo.id)}> <IconHeart filled={(Like==='')? '' : "red"} />  </button>
            
         
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;