import axios from 'axios';

const EVENT_API_URL = import.meta.env.VITE_API_URL;

class EventService{



getEventsByType(type){


    return axios.get(`${EVENT_API_URL}/${type}`);

}

getAllEvents(){


    return axios.get(`${EVENT_API_URL}/`);

}

addEvent(event){

    
    return axios.post(`${EVENT_API_URL}/addEvent`, event);



}



}

export default new EventService();