import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import User from './Components/Get/User'
import Add from './Components/Add/Add'
import Edit from './Components/Update/Edit'

const App = () => {
  const route=createBrowserRouter([
    {
      path: "/",
      element:<User />
    },
    {
      path: "/add",
      element:<Add />
    },
    {
      path: "/edit/:id",
      element:<Edit />
    },
  ])
  return (
    <RouterProvider router={route}>


    </RouterProvider>
  )
}

export default App