import React from 'react';
import '../CSS/App.css';

const GifListItem = ({ gifUrl, gifOrigLink }) => {

  return (
    <div className="gif-image">
      <a href={gifOrigLink} target="_blank"><img src={gifUrl} alt="" /></a>
    </div>
  );
  
}

export default GifListItem;
