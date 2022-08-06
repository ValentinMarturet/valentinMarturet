import React from "react";
import styles from "./Contact.module.css";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactHeader from "../components/ContactHeader/ContactHeader";

const Contact = () => {
  return (
    <div>
      <ContactHeader />
      <h1 className={styles.title}>
        Envíame un mensaje y te responderé a la brevedad.
      </h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
