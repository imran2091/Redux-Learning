import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./3_Slicer1"

const stores = configureStore({
    reducer:{
      slice1: slice1Reducer,  // maped slice1 to slice2Reducer
    }
})

export default stores;

// slice name: Reducer