import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EventList from '../components/EventList'

const Events = () => {


  return (
    <div className="portal-wrapper">
      <Nav />
      <Header />
      <main> 
        <EventList />
      </main>
      <Footer />
    </div>
  )
}

export default Events