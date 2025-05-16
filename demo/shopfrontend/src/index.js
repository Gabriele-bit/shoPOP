import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter } from 'react-router';
import { ProviderProdotti } from './Data/GestioneProdotti';
import Esauriti from './Component/Esauriti';
import { RouterProvider } from 'react-router-dom';
import Acquistati from './Component/Acquistati';
const router= createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
  },
  {
    path:"/esauriti",
    element:<Esauriti></Esauriti>
  },
  {
    path:"/acquisti",
    element:<Acquistati></Acquistati>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProviderProdotti>
      <RouterProvider router={router} />
    </ProviderProdotti>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
