import React from 'react'
import { Outlet } from 'react-router-dom'
export const CenterLayout = () => {
  return (
    <div className="center-wrapper">
        <main>
            <Outlet />
        </main>
    </div>
  )
}
