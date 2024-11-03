import React from 'react';
import {
  ContactsWrapper,
  ContactItem,
  MapContainer,
  ContactsContent,
  LeftSideContact,
  Link,
} from './ContactsPage.styled';

import email from '../../images/svg/email.svg'
import phone from '../../images/svg/phone.svg'

const Contacts = () => {
  return (
    <ContactsWrapper>
      <ContactsContent>
        <LeftSideContact>
          <ContactItem>
            <h2>Email</h2>
            <Link href="mailto:info@devstudio.com">
              <img src={email} alt="" />
              info@devstudio.com
            </Link>
          </ContactItem>
          <ContactItem>
            <h2>Phone</h2>
            <Link href="tel:+110001111111">
              <img src={phone} alt="" />
              +11 (000) 111-11-11
            </Link>
          </ContactItem>
          <ContactItem>
            <h2>Address</h2>
            <p>123 Web Studio St, City, Country</p>
          </ContactItem>
        </LeftSideContact>
        <MapContainer>
          <h2>Our Location</h2>
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509917!2d144.95373531531603!3d-37.81720997975143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0c10d4c5%3A0x5045675218ceed30!2sWeb%20Studio!5e0!3m2!1sen!2sru!4v1621234567890"
            width="600"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </MapContainer>
      </ContactsContent>
    </ContactsWrapper>
  );
};

export default Contacts;
