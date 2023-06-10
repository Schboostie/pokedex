import React from "react";
import "./App.css";

function Logo() {
  return (
    <div>
      <header>
        <h1>Welcome to the Pokedex!</h1>
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          alt="Pokemon"
        />
      </header>
    </div>
  );
}

function BestPokemon() {
  return <p>My favourite Pokemon is Squirtle</p>;
}

function App() {
  return (
    <div>
      <Logo />
      <BestPokemon />
    </div>
  );
}

export default App;
