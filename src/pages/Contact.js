import React from 'react'
import "../css/Contact.css"
import ContactItem from "../component/ContactItem"
import Title from '../component/Title';
import { PersonalDetails } from '../constant';

function Contact() {
  return (
    <>
      <Title title={"Contact Me"} />
      <div className="contactPage">
        <div className="map-sect">
          <iframe width="600"
            height="450"
            title="My-Location"
            style={{ border: "2px solid #a4acc4" }}
            src={PersonalDetails.locationPin}
            allowFullScreen
            loading="lazy" />
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={"phone"}
            title={"Phone"}
            style={{ transform: "rotateY(180deg)" }}
            value={PersonalDetails.phone}
          />
          <ContactItem
            icon={"envelope"}
            title={"Email"}
            value={PersonalDetails.email}
          />
          <ContactItem
            icon={"map-marker"}
            title={"Address"}
            value={PersonalDetails.location}
          />
        </div>
      </div>
    </>
  );
}

export default Contact
