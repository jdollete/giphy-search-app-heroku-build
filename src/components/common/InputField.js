import React from 'react';
import '../../CSS/App.css';

const InputField = ({ title, placeHolder, value, onChange, onKeyDownCheck }) => {

  return (
    <input
      id="search-input"
      onChange={onChange}
      onKeyDown={onKeyDownCheck}
      className="input-field"
      type="text"
      placeholder={placeHolder}
      value={value}
    />
  );
  
}

export default InputField;
