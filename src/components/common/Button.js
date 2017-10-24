import React from 'react';
import '../../CSS/App.css';

const Button = ({ text, onClick }) => {

  return (
    <button onClick={onClick} className="sumbit-button" type="button">{text}</button>
  );

}

export default Button;
