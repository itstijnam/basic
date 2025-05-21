import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Home from './pages/home/Home';
import Service from './pages/service/Service';


const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: '/service',
        element: <Service/>
      }
    ]
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/sign-up',
    element: <SignUp/>
  }
])

function App() {
  return (
    <RouterProvider router={browserRouter} />
  )
}

export default App