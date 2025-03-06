import React from "react";
import {  FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
  return (
    <div className="space-y-2">
      <h2 className="text-start font-bold">Find Us On</h2>
      <div className="  flex *:justify-start join-vertical">
        <button className="btn  join-item ">
            <FaFacebook></FaFacebook> Facebook</button>
        <button className="btn join-item">
            <FaTwitter></FaTwitter> Twitter</button>
        <button className="btn join-item">
            <FaInstagram></FaInstagram> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
