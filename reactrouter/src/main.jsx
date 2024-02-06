import React from 'react'
import ReactDOM from 'react-dom/client'
import App from'./App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './componenets/About/About.jsx'
import Home from './componenets/home/home.jsx'
import Contact from './componenets/Contact/Contact.jsx'
import User from './componenets/User/User.jsx'
import Github,{githubInfoLoader} from './componenets/Github/Github.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <home/>
      },
      {
        path: "about",
        element: <about/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
