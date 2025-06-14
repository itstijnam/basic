import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Home from './pages/home/Home';
import Service from './pages/service/Service';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Blog from './pages/BlogPage/pages/Blog'; 
import SubServicePage from './pages/service/SubServicePage';
import ProjectDisplay from './components/projectDisplay/ProjectDisplay';


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
      },
      {
        path: 'service/:pagename',
        element: <SubServicePage/>
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/portfolio',
        element: <Portfolio/>
      },
      {
        path: 'portfolio/view',
        element: <ProjectDisplay/>
      }
    ]
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/signup',
    element: <SignUp/>
  }
])

function App() {
  return (
    <RouterProvider router={browserRouter} />
  )
}

export default App