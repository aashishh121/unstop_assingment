import React, {useEffect,useState} from 'react'
import './App.css';

import BookSeats from './Components/BookSeats';

function App() {

  const [seats, setSeats] = useState([]);

  useEffect(() => {
    getSeats();
  }, []);

  // this function is used to fetch the data of available seats from mongodb database.
  const getSeats = async () => {
    let result = await fetch("https://booking-app-ghz6.onrender.com/seats");
    result = await result.json();
    setSeats(result);
  }


  return (
    <div className="App">
      <BookSeats valuee={seats} getSeats={getSeats} />
    </div>
  );
}

export default App;
