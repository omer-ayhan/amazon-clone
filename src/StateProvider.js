import React, { createContext, useReducer, useContext } from 'react';

// Prepares the initial state
export const StateContext = createContext();

// Wrap our app and provide the initial state
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the initial state
export const useStateValue = () => useContext(StateContext);
