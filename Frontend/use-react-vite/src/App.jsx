import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventListComponent from './components/EventListComponent';
import AddEventComponent from './components/AddEventComponent';
import EventTypeListComponent from './components/EventTypeListComponent';

function App() {

  return (
   <>
   
   <Router>

      <Routes>

        <Route path="/events/:type" element={<EventTypeListComponent />} />
        <Route path="/events/" element={<EventListComponent />} />
        <Route path="/events/newevent" element={<AddEventComponent />} />

      </Routes>



   </Router>
   
   
   
   
   
   </>



  )
}

export default App
