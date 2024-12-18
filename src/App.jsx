
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import axios from 'axios'
import './App.css'

import AllCars from './Components/Section2/AllCars/AllCars'
import CarDetails from './Components/CarDetails/CarDetails'
import Home from './Components/Home/Home'
import MasterLayout from './Components/MasterLayout/MasterLayout'
import Notfound from './Components/NotFound/NotFound'







function App() {
  
  const routes = createBrowserRouter ([{
    path: '/',
    element: <MasterLayout />,
    errorElement: <Notfound/>,
    children: [
      { index: "true", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "home/allcars", element: <AllCars /> },
      {path:"home/allcars/:id",element:<CarDetails/>}
    ]
}])

  return (
  
    <>
      

      <RouterProvider  router={routes}></RouterProvider>
      
  
      
    </>
  )
  
}

export default App
