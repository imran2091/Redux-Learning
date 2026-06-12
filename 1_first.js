import React from "react";
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux";
import stores from "./4_Stores";
import Counting from "./2_Counting";

function App(){
    
    console.log(stores);

    return (
         // provider said now anyone can use this store. like counting component is used in this example

        <Provider store={stores}>.  
        <Counting></Counting>
        </Provider>
  
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);


