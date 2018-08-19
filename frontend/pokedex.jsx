import React from 'react';
import ReactDom from 'react-dom';

import {receiveAllPokemon} from './actions/pokemon_actions.js';
import {fetchAllPokemon} from './util/api_util';
import configureStore from './store/store';


document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDom.render(<h1>Pokedox</h1>,root);

})
