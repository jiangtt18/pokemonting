import {connect} from 'react-redux';

import PokemonIndex from './pokemon_index';
import {requestAllPokemon} from '../../actions/pokemon_actions';
import {selectAllPokemon} from '../../reducers/selector';

const mapStateToProps = (state) => ({
  pokemon: selectAllPokemon(state)
});



const mapDispatchToProps = disaptch => {
  return (
    {requestAllPokemon:() => disaptch(requestAllPokemon())}
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
