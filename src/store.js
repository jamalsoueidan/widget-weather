import { createStore, combineReducers, applyMiddleware } from "redux";

export const updateCity = ( data ) => ({
  type: "UPDATE_CITY",
  data,
});

const dataReducer = ( state = {}, action ) => {
  if( action.type === "UPDATE_CITY" ) {
    return action.data
  } 
  return state
};

const reducer = combineReducers({
  data: dataReducer
});

export default ( initialState ) => createStore( reducer, initialState );