import React from "react";
import './Contact.css';
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Navbar } from "./Navbar";

// const mapContainerStyle = {
//   width: "100%",
//   height: "400px",
// };

// const center = {
//   lat: 37.7749, // Replace with your latitude
//   lng: -122.4194, // Replace with your longitude
// };

const contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
    <Navbar/>
    <div>
      <h1>Contact Me</h1>
      {/* <div>
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div> */}

<div class="form-container">
      <form class="form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" placeholder="Enter Your Full Name" id="email" name="email" required/>
          <label for="email">Email</label>
          <input type="text" placeholder="Enter Your Email" id="email" name="email" required/>
        </div>
        <div class="form-group">
          <label for="textarea">Your Message</label>
          <textarea name="textarea"  id="textarea" rows="10" cols="50" required></textarea>
        </div>
        <button class="form-submit-btn" type="submit">Send</button>
      </form>
    </div>
    </div>
    </>
    
  );
};

export default contact;
