import React from 'react'
import "../css/Contact.css"
import ContactItem from "../component/ContactItem"
import Title  from '../component/Title';

function Contact() {
    return (
      <>
        <Title title={"Contact Me"} span={"Contact Me"} />
        <div className="contactPage">
          <div className="map-sect">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.8720524801743!2d77.02086351503355!3d28.51349698246501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1a1d5c8bcfc7%3A0xd3c211204b477c43!2sA175%2C%20Block%20A%2C%20New%20Palam%20Vihar%20Phase%202%2C%20Palam%20Vihar%2C%20Gurugram%2C%20Haryana%20122017!5e0!3m2!1sen!2sin!4v1626774992424!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "2px solid #a4acc4"}}
              allowFullScreen={true}
              loading="lazy"
              title="My-Location"
            ></iframe>
          </div>
          <div className="contact-sect">
            <ContactItem
              icon={"phone"}
              title={"Phone"}
              style={{transform : "rotateY(180deg)"}}
              text1={`${process.env.REACT_APP_PHONE}`}
            />
            <ContactItem
              icon={"envelope"}
              title={"Email"}
              text1={`${process.env.REACT_APP_EMAIL}`}
            />
            <ContactItem
              icon={"map-marker"}
              title={"Address"}
              text1={`${process.env.REACT_APP_ADDRESS}`}
            />
          </div>
        </div>
      </>
    );
}

export default Contact
