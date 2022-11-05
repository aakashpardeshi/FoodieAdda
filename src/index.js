import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
import './index.css'
import App from './App'
import React from "react"
import { StateProvider } from "./Context/StateProvider";
import { InitialState } from "./Context/InitialState";
import Reducer from "./Context/Reducer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <StateProvider initialState={InitialState} reducer={Reducer}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StateProvider>
    </React.StrictMode>
);
