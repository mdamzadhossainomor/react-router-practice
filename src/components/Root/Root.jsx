import React from 'react'
import { NavBar } from '../Header/NavBar'
import { Outlet } from 'react-router'

export const Root = () => {
  return (
      <div>
          <NavBar />
          <Outlet />
          
    </div>
  )
}
