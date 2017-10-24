import React from 'react';

import '../CSS/App.css';

import InputField from './common/InputField';
import Button from './common/Button';

const Search = ({ onClick, onChange, onKeyDownCheck, value }) => {

  return (
    <div className="search-section">
      <InputField
        onChange={onChange}
        onKeyDownCheck={onKeyDownCheck}
        value={value}
        placeHolder="What would you like to search for?"/>
      <Button onClick={onClick} text="Search"/>
    </div>
  );
  
}

export default Search;
