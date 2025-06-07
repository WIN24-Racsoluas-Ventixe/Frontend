import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'

const PortalLayout = () => {
  return (
    <div className='portal-wrapper'>
        <Nav />
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default PortalLayout