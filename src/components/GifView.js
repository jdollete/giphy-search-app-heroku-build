import React from 'react';
import '../CSS/App.css';
import GifListItem from './GifListItem';
// import SectionHeader from './common/SectionHeader';

class GifView extends React.Component {

  // constructor(props) {
  //   super(props);

    // this.state = ({
    //   headerText: "Trending GIFS"
    // });

    // this.setHeaderStateToDefault = this.setHeaderStateToDefault.bind(this);
    // this.setHeaderStateToSearched = this.setHeaderStateToSearched.bind(this);

  // }

  renderRow(trendingGifObjects, searchedGifObjects) {
    // -----Edge case: when search isn't found, it goes back to trending------
    var elements = [];
    if ( Array.isArray(searchedGifObjects) === false || searchedGifObjects.length !== 0 ) {
      elements = searchedGifObjects;
    } else {
      elements = trendingGifObjects;
    }

    if ( elements != null ) {
      const gifRows = elements.map(function(element){

        return (
          <GifListItem
            key={element.id}
            gifUrl={element.images.fixed_height.url}
            gifOrigLink={element.url}
          />
        )
      });

      return gifRows;
    }

  }

  // renderSectionHeader() {
  //
  //   return (
  //     <SectionHeader
  //       sectionClass="sectioned-headers"
  //       title={this.state.headerText}
  //     />
  //   );
  // }

  // setHeaderStateToDefault() {
  //   this.setState({
  //     headerText:"TRENDING GIFS"
  //   });
  // }
  //
  // setHeaderStateToSearched() {
  //   this.setState({
  //     headerText:"SEARCH RESULTS"
  //   });
  // }

  render() {
    const { trendingGifObjects, searchedGifObjects } = this.props;

    return (
      <div className="gif-image-section">
        <div className="gif-image-display">
          {this.renderRow(trendingGifObjects, searchedGifObjects)}
        </div>
      </div>
    );
  }
}

export default GifView;
