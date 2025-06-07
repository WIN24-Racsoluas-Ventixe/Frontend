import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'

const BookingSuccess = () => {
  return (
    <div className="portal-wrapper">
        <Nav />
        <Header />
        <main>
            <div className="successful-booking">
                <h2>Booking successful</h2>
                <p>Thank you for trying to purchase tickets!</p>
                <p>Tickets will not be sent to your email.</p>
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default BookingSuccess