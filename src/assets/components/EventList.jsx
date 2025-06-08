import React, { useEffect, useState} from 'react'
import EventCard from '../components/EventsCard'


const EventList = () => {
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)


    const getEvents = async () => {
        const res = await fetch ("https://win24-eventservice-dhcshke8dnf4a2ds.swedencentral-01.azurewebsites.net/api/Events") 

        if (res.ok) {
        const response = await res.json()
        setEvents(response.result)
        }

        setLoading(false)

    }

    useEffect(() => {
        getEvents()
    }, [])


  return (
    <section id="events">
        {
        loading ? ( 
            <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div className="spinner" />
            </div>
        ) : (
            

            events.map(event => (
            <EventCard key={event.id} event={event} /> 
            ))
        )}
    </section>
  )
}

export default EventList