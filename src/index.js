// To continue on with the pokemon theme, we've found a
// pokemon API for you to practice on --> https://pokeapi.co/.
// If you go to this page --> https://pokeapi.co/api/v2/,
// you can see all of the endpoints available.
// We will start with the endpoint named pokemon.

// The goal is to change the content of our mystery table in
// HTML to contain info about one specific pokemon. To get you
// started, we've created some variables for you to use later on:

const image = document.getElementById("image");
const name = document.getElementById("name");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");

// 1) Start with updating the fetchPokemons function so that
//    it's fetching the pokemons from the pokemon endpoint and
//    logs the results in the console.
//    HINT --> Don't forget to invoke the function

const fetchPokemons = () => {
  /*Fetch all pokemons here*/
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then((response) => response.json())
    .then((data) => {
      // a) Log only the array of Pokémon objects
      const pokemonArray = data.results;
      console.log(pokemonArray);

      // b) Log only the name of the first Pokémon in the array
      const firstPokemonName = pokemonArray[0].name;
      console.log(`Name of the first Pokémon: ${firstPokemonName}`);

      // c) Log the names of all Pokémon in the array
      const allPokemonNames = pokemonArray.map((pokemon) => pokemon.name);
      console.log("Names of all Pokémon:", allPokemonNames);
    })
    .catch((error) => {
      console.error("Error fetching Pokémon data:", error);
    });
};
// Invoke the function to fetch and log Pokémon data
fetchPokemons();

// 2) a) As you can see, we get some metadata as well as
//    the results of the fetch. Change the console.log so
//    that you only log the array of pokemon objects.

//    b) Log only the name of the first pokemon in the
//    pokemon objects array

//    c) Log the names of all pokemons in the array

// 3) You might know that there are more than 20 pokemons
//    in the pokedex. Add a query parameter
//    called "limit" to the URL, and set it to a number of your
//    choice, like this: https://pokeapi.co/api/v2/pokemon/?limit=151
//    and pick a pokemon that you would like to continue
//    working with. Copy the pokemon's URL.

// 4) Now that we've picked a pokemon, we will do a new fetch
//    to the URL we copied. Since that's another endpoint,
//    we will create a new fetch inside the fetchBulbasaurData
//    function (change the function's name to fit your pokemon).
//    Log the data in the console and see what you find.

const fetchBulbasaurData = () => {
  // Replace the URL below with the URL of the specific Pokémon you want to fetch
  const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/bulbasaur/";

  fetch(pokemonUrl)
    .then((response) => response.json())
    .then((data) => {
      // Update the image source with the front_default sprite
      const image = document.getElementById("image");
      image.src = data.sprites.front_default;

      // You can also update other elements in the table with data
      document.getElementById("name").textContent = data.name;
      document.getElementById("weight").textContent = data.weight;
      document.getElementById("height").textContent = data.height;

      // Handle multiple types (if there are more than one)
      const types = data.types.map((typeObj) => typeObj.type.name);
      document.getElementById("types").textContent = types.join(", ");
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching Pokémon data:", error);
    });
};

// Invoke the function to fetch and log the Pokémon data
fetchBulbasaurData();

// 5) After familiarizing with the data, we will use the data
//    to change our table. We will give you the image as a start.
//    If you named the data something else than json, you change the
//    word json below so it corresponds with your code. Here goes:
//    image.src = json.sprites.front_default;
//    Copy that line into the fetchBulbasaurData and hopefully
//    the image in the HTML updates.

// 6) Update the innerHTML of the other rows as well after
//    you've found the correct path in the json.
//    HINT --> Log stuff in the console to try things out
//    HINT --> If it's an array - map over the array

// ***BONUS***
// Check out the API's documentation and try to fetch from another
// endpoint! There are many - as you can see in the first link