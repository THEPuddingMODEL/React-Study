import { useState, useEffect } from "react";

import Places from "./Places.jsx";
import Error from "./error.jsx";
import { sortPlacesByDistance } from "../loc.js";

export default function AvailablePlaces({ onSelectPlace }) {
  // this works with local storage, localstorage
  // Because JS nature, if no data, cannot wait
  //const [availablePlaces, setAvailablePlaces] = useState(places)

  const [isFetching, setIsfetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState()

  // useEffect(() => {
  //   fetch('http://localhost:3000/places')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((resData) => {
  //       setAvailablePlaces(resData.places);
  //     });
  // },[]);

  useEffect(() => {
    async function fetchPlaces() {
      setIsfetching(true);

      try {
        const response = await fetch("http://localhost:3000/places");
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("Failed to fetch places")
        }

        
        navigator.geolocation.getCurrentPosition((position)=>{

          const sortedPlaces = sortPlacesByDistance (resData.places, position.coords.latitude, position.coords.longitude)

          setAvailablePlaces(sortedPlaces);

          setIsfetching(false)

        })

      } catch (error) {
        setError({message:
          error.message || 'Could not fetch places, please try again later'})

          setIsfetching(false)
      }

      // end loading state no matter we get loading anymore
      //setIsfetching(false);
    }

    fetchPlaces();
  }, []);

  if(error){
    return <Error title="An error occured" message={error.message}>

    </Error>
  }

  // not work with backend request. Not instant.

  // everytime the reexecute with re-render
  // but with second then request,will have infinite loop
  // fetch('http://localhost:3000/places').then((response) =>{
  //   response.json()
  // })
  // .then((resData)=>{

  //   setAvailablePlaces(resData.Places)

  // })

  //const response = await fetch
  // await keyboard not availble wih React

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching places data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
