import { Route, Routes } from 'react-router-dom'
import './App.css'
import Events from './assets/pages/Events'
import EventDetails from './assets/pages/EventDetails'
import Booking from './assets/pages/Booking'
import BookingSuccess from './assets/pages/BookingSuccess'

function App() {
  return (
    <div className="app">
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/events/booking/:id" element={<Booking />} />
          <Route path="/events/booking/bookingsuccess/:id" element={<BookingSuccess />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
