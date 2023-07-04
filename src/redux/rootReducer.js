import { combineReducers } from 'redux';
import contactReducer from './contactReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

export default rootReducer;
