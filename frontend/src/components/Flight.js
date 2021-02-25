import React from 'react';
import '../css/Flight.css';

const Flight = (props) => {
    if(props.details){
    return (
        <div class="card" id="card">
        <div class="card-header">Flight Details</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Flight Date : {props.details.flight_date}</li>
          <li class="list-group-item">Departure : {props.details.departure.airport}</li>
          <li class="list-group-item">Arrival : {props.details.arrival.airport}</li>
          <li class="list-group-item">Airline : {props.details.airline.name}</li>
          <li class="list-group-item">Flight Number : {props.details.flight.number}</li>
        </ul>
      </div>
    );
    } else {
        return (
            <div>  
            </div>
        );
    }
}
export default Flight;
