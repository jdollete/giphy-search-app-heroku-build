import React from 'react';
import '../../CSS/App.css';

const SectionHeader = (props) => {
  const { title, sectionClass } = props;

  return (
    <div className="">
      <span className={sectionClass}>{title}</span>
    </div>
  );

}

export default SectionHeader;
