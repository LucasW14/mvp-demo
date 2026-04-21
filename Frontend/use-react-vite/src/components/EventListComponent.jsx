import EventService from '../EventService.jsx'
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../index.css';


const EventListComponent = () => {
const [events, setEvents] = useState([])

useEffect(() => {
        EventService.getAllEvents().then((res) => {

            setEvents(res.data);
            document.title = `Here are some events`



        })


    })






return(

<div>
       <div className="row">
        <Link to="/events/" className="btn btn-outline-primary">Home</Link>
      </div>
      
      
      <div className="row">
        <Link to="/events/newevent" className="btn btn-outline-primary">Add Event</Link>
      </div>
      <main className="items-container">
        {events.map(event => (
          <article className="item" key={event.id}>
            <div className="text">
              <h3>
                {event.event_name}
              </h3>
              <p>Date: {event.event_date}</p>
              <p><Link to={`/events/${event.type}`}>{event.type}</Link></p>              <p>Location: {event.location}</p>
              {/* <p><Link to={`/events/type/${event.type}`}>{product.type}</Link></p> */}
              {/* <p><Link className="detail-button" to={`/products/${product.id}`}>View</Link></p> */}
              {/* <button className="delete-button" onClick={() => ProductsService.deleteProduct(product.id)
                .then(() => setProducts(products.filter(p => p.id !== product.id)))}>Delete</button> */}

            </div>
          </article>
        ))}
      </main>
    </div>



);




};

export default EventListComponent;
























