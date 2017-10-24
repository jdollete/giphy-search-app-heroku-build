## Instructions To Run:
* Install Node globally {npm install npm@latest -g}
* On your terminal/command line:
  * git clone https://github.com/jdollete/giphy-search-app.git
  * cd to the root directory of the file
  * Enter in "npm start"
    * If module errors occur, try entering "npm install"

## MVP:
* GIFs must animate.
* Main view should:
  * Show a list of Trending GIFs.
  * Show a search bar so a user can find a GIF.
  * After the user searches for a term, app will display results of search right there in the main view
  * A list of previous search terms should be maintained and should be clickable to re-run that search

## Stretch Goals (Future Plans):
* Have search by Language
* Have previous searches be stored on local storage, so that the user can come back with populated previous searches
* Deploy app to Heroku after setting up WebPack

## Known Bugs:
* When search isn't found, it goes back to trending
* Only clears searches after the second search

## API Call:
* Trending
  * http://api.giphy.com/v1/gifs/trending?api_key={Your Key}
* Search
  * http://api.giphy.com/v1/gifs/search?q=dogs&api_key={Your Key}
