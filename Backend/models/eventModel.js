"use strict";
const pool = require('./dbConnection');


async function getEventsByType(params) {
    const queryText = "SELECT * FROM events where type= $1";
    const values = [params]; 
    const result = await pool.query(queryText, values);
    return result.rows;


} 

async function getAllEvents() {

    const queryText = "SELECT * FROM events"
    const result = await pool.query(queryText);
    return result.rows;
    
}


async function postEvent(type, event_date, time_start, duration, location, planner, event_name, description, ticket_price){

    let queryText = "INSERT INTO events (type, event_date, time_start, duration, location, planner, event_name, description, ticket_price) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING * ";
    let values = [type, event_date, time_start, duration, location, planner, event_name, description, ticket_price];
    const result = await pool.query(queryText, values);
    return result.rows;
}


module.exports = { 

    getEventsByType,
    getAllEvents,
    postEvent


}