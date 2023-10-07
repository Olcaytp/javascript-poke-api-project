# Pokémon Information Web App

This web app allows you to fetch and display information about your favorite Pokémon. It leverages the Pokémon API to retrieve data and updates the user interface with the fetched information.

## How to Use

1. Clone or download this repository to your local machine.

2. Open the `index.html` file in a web browser.

3. The app will automatically fetch Pokémon data and display it on the page.

## Features

- Fetch Pokémon data from the Pokémon API.
- Display Pokémon name, weight, height, and types.
- Dynamically update the Pokémon image with the front_default sprite.
- Easily customize the Pokémon to fetch by modifying the URL in the JavaScript code.
- Error handling for failed API requests.

## Images

<img
  src="src\asset\image.png"
  alt="covid-19 App"
  title="Optional title"
  style="display: inline-block; margin: 0 auto; max-width: 300px">

## Technologies Used

- HTML
- CSS
- JavaScript
- Pokémon API (https://pokeapi.co/)

## How to Customize

You can customize the Pokémon you want to fetch by changing the `pokemonUrl` variable in the JavaScript code (`index.js`). Replace `{pokemon-name}` with the name or ID of the Pokémon you want to retrieve.

```javascript
const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/{pokemon-name}/";
