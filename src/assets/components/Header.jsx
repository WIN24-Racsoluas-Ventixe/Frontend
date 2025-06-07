import React from 'react'
import { useLocation } from 'react-router-dom'

const Header = () => {

  const location = useLocation();
  const path = location.pathname;

  let headerTitle = 'Ventrixe';

  if (path === '/') {
    headerTitle = 'Events';
  } else if (path.startsWith('/events')) {
    headerTitle = 'Event';
  } else if (path.startsWith('/BookingEvent')) {
    headerTitle = 'Book Event';
  }

  return (
    <header>
      <h1>{headerTitle}</h1>
      </header>
  )
}

export default Header