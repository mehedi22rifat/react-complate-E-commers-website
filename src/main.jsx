import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './components/Home/Home';
import Main from './components/Home/Main/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main/>,
    errorElement:<h1> this is error page</h1>,
    children:[
      {
        path:'/',
        element:<Home/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
