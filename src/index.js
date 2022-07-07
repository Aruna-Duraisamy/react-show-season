import React, { useState } from 'react'
import { createRoot } from 'react-dom/client';
import Error from './components/Error';
import Loading from './components/Loading';
import Season from './components/Season';
import './index.css';

const App = () => {
    //  A. Use Geolocation API to get User latitude
    //      - show loading page until user makes a decision
    //  B. User accepts to share location,
    //      - pass  to Season component
    //      - Season Component will display the Season Text with image.
    //  C. User denies to share location
    //      - show error page

    const [latitude, setLatitude] = useState();
    const [errorMessage, seterrorMessage] = useState();

    window.navigator.geolocation.getCurrentPosition(
        (position) => { setLatitude(position.coords.latitude) },
        (error) => { seterrorMessage(error.message) }
    );
  
  //DecisionMaker: Which component to display?
  // A. Loading
  // B. Season display
  // C. Error

  if (errorMessage && !latitude) {
    return <Error errorMessage={errorMessage} />
  }

  if (!errorMessage && latitude) {
    return <Season latitude={latitude} />
  }

  return <Loading message="Waiting to know your location..."/>
   
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);