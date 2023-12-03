import { useState, useEffect } from "react";

import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  // this works with local storage, localstorage
  // Because JS nature, if no data, cannot wait
  //const [availablePlaces, setAvailablePlaces] = useState(places)

  const [availablePlaces, setAvailablePlaces] = useState([]);

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
      const response = await fetch("http://localhost:3000/places")
      const resData = response.json()

      setAvailablePlaces(resData.places)

    }
  }, []);

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
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
