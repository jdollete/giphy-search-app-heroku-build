import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../CSS/App.css';

import SectionHeader from './common/SectionHeader';
import Search from './Search';
import PreviousSearches from './PreviousSearches';
import GifView from './GifView';
import {
  inputFieldChanged, 
  searchGifs,
  setPreviousSearch,
  clearSearch,
  fetchTrending
} from '../actions';


class IntroPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentSearchState: []
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
    this.onKeyDownCheck = this.onKeyDownCheck.bind(this);
    this.onListItemClick = this.onListItemClick.bind(this);

  }

  componentWillMount() {
    this.props.fetchTrending();
  }

  onKeyDownCheck(event) {
    if ( event.key === "Enter" ) {
      this.onSearchClick();
    }
  }

  onInputChange(text) {
    const currentText = document.getElementById("search-input").value;

    this.props.inputFieldChanged(currentText);
  }

  onSearchClick() {
    const input = this.props.inputFieldText;

    if ( this.props.previousSearches[0] === undefined ) {
      this.props.setPreviousSearch(this.props.previousSearches, input)
    } else {
      const wordsSearched = this.props.previousSearches.map(element => {return element.word})
      if ( wordsSearched.includes(input) ) {
        return
      } else {
        this.props.setPreviousSearch(this.props.previousSearches, input);
      }

      // Edge Case: Only clears searches after second search
      this.props.clearSearch();
    }
    this.props.searchGifs(input);
  }

  onListItemClick(event) {
    const previousSearchItem = event._dispatchInstances.memoizedProps.children;

    this.props.searchGifs(previousSearchItem);
  }

  render() {
    return (
      <div>
        <SectionHeader title="GIPHY SEARCH" sectionClass="main-header" />
        <div className="outter-box">
          <Search
            onClick={this.onSearchClick}
            onChange={this.onInputChange}
            onKeyDownCheck={this.onKeyDownCheck}
            value={this.props.inputFieldText}
          />
          <div className="inner-box">
            <div className="inner-left-box">
              <GifView
                trendingGifObjects={this.props.trendingGif}
                searchedGifObjects={this.props.gifSearchResults}  />
            </div>
            <div className="inner-right-box">
              <PreviousSearches
                previousSearches={this.props.previousSearches}
                onListItemClick={this.onListItemClick}
              />
            </div>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => {

  const {
    previousSearches,
    trendingGif,
    gifSearchResults,
    inputFieldText,
    searchedGifs
  } = state.gifObjects

  return {
    trendingGif,
    inputFieldText,
    searchedGifs,
    previousSearches,
    gifSearchResults
  };

};

export default connect(mapStateToProps, {
  inputFieldChanged,
  searchGifs,
  setPreviousSearch,
  clearSearch,
  fetchTrending
})(IntroPage);
