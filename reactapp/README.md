
## Project Title

This application is connected to the Rest Countries API (https://restcountries.com/). On the Homepage there is a search component and a list of countries to choose from. The homepage provides you with a brief decription about each country including the countries name, population and an image of their flag. You can search for the country you are looking for in the search bar and you can load more results as you go down the page.

Once you have clicked on a country from the homepage it will bring you to another page which will give you more detailed information about the country you have clicked on.

## Configuring the project

- To install NextJs run "npm i next" in the terminal.
- I am using a font awesome icon so you will have to install these packages:
    -npm i --save @fortawesome/fontawesome-svg-core
    -npm install --save @fortawesome/free-solid-svg-icons
    -npm install --save @fortawesome/react-fontawesome

- To run the project in development then cd into reactapp and type "npm run dev" in the terminal.
or
- cd into reactapp run "npm run build" to build the project and then run "npm start"

The project will run on http://localhost:3000

## Features
Homepage
- Search bar which filters through data returned
- A list of countries with a summary of information on each one.
- A load more button to load more results

[id].js page
- This page returns more detailed information about the clicked on country. Information includes:
   - Name of country
   - Population
   - Currency
   - Capital
   - Languages
   - Bordering countries

errorpage: This page is shown when people try to search for a country that deos not exist and brings you back to the homepage. It includes:
- Information telling the user that the country deos not exist
- A button that returns them to the homepage.

## Code Example
index.js page: this is the parent page. I put the search bar in a file called search country and the returned data from api in a file called data from api, these components are in a folder called othercomponents. I then called these components on index.js

CSS for index.js: The css for the searchbar is in globals.css and the styling for the rest of the page is in Home.module.css

[id].js page
I rendered all the detailed information about that country onto that page.

CSS for [id] page: It is in the folder styles called ReadMore.module.css

errorpage.js
I rendered all components on this page.

CSS for error page is in the file called error.module.css






