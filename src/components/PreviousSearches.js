import React from 'react';
import '../CSS/App.css';
import SectionHeader from './common/SectionHeader';

class PreviousSearches extends React.Component {

  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
  }

  renderList(list, onListItemClick) {
    const _this = this;
    const rowSearches = list.map(function(element){

      return (
        <li
          onClick={_this.props.onListItemClick}
          key={element.id}
        >
          {element.word}
        </li>
      );
    });
    return rowSearches;
  }

  render() {
    const { onListItemClick, previousSearches } = this.props;

    return (
      <div className="previous-search-section">
        <div className="">
          <SectionHeader 
            sectionClass="sectioned-headers, previous-search-header"
            title="Previous Searches"
          />
        </div>
        <div>
          <ul className="previous-search-list">
            {this.renderList(previousSearches, onListItemClick)}
          </ul>
        </div>
      </div>
    );
  }
}

export default PreviousSearches;
