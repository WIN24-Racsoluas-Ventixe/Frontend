import React from 'react'
import { Link } from 'react-router-dom'
import locationsvg from '/src/assets/images/location.svg'

const formatDateToReadable = (dateString) => {
  const date = new Date(dateString);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
 
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    hour12: true,
  });
 
  return `${formattedDate} - ${formattedTime}`;
};

const EventCard = ({event}) => {
  return (
    <Link to={`/events/${event.id}`}>
        <div className="event-card">
          <div className="event-card-image">{event.image}</div>
          <div className="event-card-date">{formatDateToReadable(event.eventDate)}</div>
          <div className="event-card-title"><p>{event.title}</p></div>
          <div className="event-card-location"><img src={locationsvg} /> {event.location}</div>
        </div>
      </Link>
  )
}

export default EventCard