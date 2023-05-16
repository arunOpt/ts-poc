import React, { FormEvent } from 'react';
import './Map.css';
import axios from "axios";

declare var google: any;




const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "AIzaSyCIaAc2c5M3VpbCH6PPq_guwy9lHuowXOs";

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};






const MapContainer:React.FC=()=>{
    
  // const form = document.querySelector("form")!;
  // const addressInput = document.getElementById("address")! as HTMLInputElement;



  function searchAddressHandler(event: FormEvent) {
    event.preventDefault();
    const enteredAddress = addressInput.value;
  
    axios
      .get<GoogleGeocodingResponse>(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
          enteredAddress
        )}&key=${GOOGLE_API_KEY}`
      )
      .then(response => {
        if (response.data.status !== "OK") {
          throw new Error("Could not fetch location!");
        }
        const coordinates = response.data.results[0].geometry.location;
        const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
          center: coordinates,
          zoom: 16
        }); 
  
        new google.maps.Marker({ position: coordinates, map: map });
      })
      .catch(err => {
        alert(err.message);
        console.log(err);
      });
  }




  return (
    <div >
<div id="map" style={{width: "100%", height: "400px"}}>
      <p>Please enter an address!</p>
    </div>
    <form onSubmit={searchAddressHandler}>
      <input type="text" id="address"  placeholder='type address'/>
      <button type="submit">SEARCH ADDRESS</button>
    </form>


    </div>
  );
}

export default MapContainer;
