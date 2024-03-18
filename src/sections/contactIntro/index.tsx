import React from "react";

import { ContactStrip } from "./contactIntro.styles";

import ContactForm from "@/components/Forms/ContactForm";
import SectionComponent from "@/components/Section";
import {
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_PHONE,
  GOOGLE_MAPS_LINK,
} from "@/constants/info";
import { formatPhoneNumber } from "@/utils/sting";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const ContactIntro = () => {
  return (
    <SectionComponent
      title="Information"
      titleAlign="center"
      sectionsType="single"
    >
      <ContactStrip>
        {/* phone */}
        <div>
          <div className="svgWrap">
            <FaPhone size={18} />
          </div>
          <span>
            <label>Phone Number</label>

            <a href={`tel:${BUSINESS_PHONE}`}>
              {formatPhoneNumber(BUSINESS_PHONE)}
            </a>
          </span>
        </div>

        {/* email */}
        <div>
          <div className="svgWrap">
            <IoIosMail size={24} />
          </div>
          <span>
            <label>Email</label>

            <a
              href={`mailto:${BUSINESS_EMAIL}?subject = Cleaning Service Questions`}
            >
              {BUSINESS_EMAIL}
            </a>
          </span>
        </div>

        {/* address */}
        <div>
          <div className="svgWrap">
            <FaLocationDot size={20} />
          </div>
          <span>
            <label>Address</label>

            <a href={`${GOOGLE_MAPS_LINK}${BUSINESS_ADDRESS}`}>
              {BUSINESS_ADDRESS}
            </a>
          </span>
        </div>
      </ContactStrip>

      <ContactForm />
    </SectionComponent>
  );
};

export default ContactIntro;
