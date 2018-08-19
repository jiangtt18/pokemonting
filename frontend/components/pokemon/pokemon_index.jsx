import React, {Component} from 'react';


class PokemonIndex extends Component{
  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    let pokemons = this.props.pokemon;
    let pokemonList = 'loading';
    if (pokemons.length !== 0){
      pokemonList = pokemons.map((pokemon) => {
        return(
          <li>{pokemon.id, pokemon.name}</li>
        );
      });
    }

    return(
      <ul>{pokemonList}</ul>
    );
  }
}

export default PokemonIndex;
