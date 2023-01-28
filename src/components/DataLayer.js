import React, { createContext, useContext, useReducer } from "react";


//preparing the Datalayer 
export const DataLayerContext = createContext();

//Creating the Datalayer
export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        { children }
    </DataLayerContext.Provider>
)

export const useDataLayerValue = () => useContext(DataLayerContext);