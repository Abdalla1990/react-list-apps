import { createStore } from 'redux';
import allReducers from '../reducers/'
import { composeWithDevTools } from 'redux-devtools-extension';


export default () => {

    const state = {} ;
    const reducers = allReducers
    
    const store = createStore(reducers, state, composeWithDevTools());
    
    return store;
};
