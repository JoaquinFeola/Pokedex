import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { PokedexProvider } from './context/PokedexProvider';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'animate.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PokedexProvider>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </PokedexProvider>
  </BrowserRouter>

)
