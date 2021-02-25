import React , {useState} from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import axios from 'axios';
import Flight from './components/Flight';

const App = () => {
  const [data, setData] = useState('');

  const sendFlightNumber = async (event) =>{
    event.preventDefault();
    const flightNumber = event.target[0].value;
    try {
      const response = await axios.get(`https://flight-number-firas.000webhostapp.com/api/flight/${flightNumber}`);
      setData(response.data.flightData.data[0]); 
      console.log(response.data.flightData.data[0]);
    } catch (error) {
      
    }
  }
  return (
    <div>
      <Navbar />
      <Form sendFlightNumber={sendFlightNumber} />
      <Flight details={data} />
    </div>
  )
}
export default App;
