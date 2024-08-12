import React, { useState } from "react";
import { RiContactsFill } from "react-icons/ri";
import { IoIosMail, IoIosCall } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa";
import { Contactbutton, ContactSection, ContactIcon } from "./styledComponents";

const Contact = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContactMenu = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  return (
    <div>
      <ContactSection isExpanded={isExpanded}>
        <ContactIcon>
          <IoIosMail />
        </ContactIcon>
        <ContactIcon>
          <IoIosCall />
        </ContactIcon>
        <ContactIcon>
          <FaFacebookMessenger />
        </ContactIcon>
      </ContactSection>
      <Contactbutton onClick={toggleContactMenu} data-testid="contactbtn">
        <RiContactsFill className="contact-icon" />
      </Contactbutton>
    </div>
  );
};

export default Contact;
