import React from 'react';
import ReactDom from 'react-dom';

import {receiveAllPokemon} from './actions/pokemon_actions.js';
import {fetchAllPokemon} from './util/api_util';
import {selectAllPokemon} from './reducers/selector';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDom.render(<Root store={store} />,root);

})
