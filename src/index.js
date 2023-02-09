import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './pages/Main';
import Currencies from './pages/Currencies';
import Coin from './pages/Coin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element: <Main/>,
    },
      {
        path:"/currencies",
        element: <Currencies/>,
    },
      {
        path:"/coin/:symbol",
        element: <Coin/>,
    },
  ]
  },
  {
    path: "/about",
    element: <div>Hello about!</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

// /              render Dashboard
// /currencies    currency page
// /price         price page

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
