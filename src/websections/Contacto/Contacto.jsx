import React from "react";
import styles from "./Contacto.module.css";
import CoolTitle from "../../components/CoolTitle/CoolTitle";
import Button from "../../components/Button/Button";

export default function Contacto() {
  return (
    <section className={styles.contactoSection} id="contacto">
      <CoolTitle className={styles.titulo}>¿Listo para empezar?</CoolTitle>
      <div className={styles.grid}>
        <form className={styles.formulario} autoComplete="off">
          <input type="text" name="nombre" placeholder="Tu nombre" required />
          <input type="email" name="email" placeholder="Tu email" required />
          <textarea name="mensaje" placeholder="¿En qué te ayudamos?" rows={4} required />
          <Button label="Enviar mensaje" effect="primary" size="big" type="submit" />
        </form>
        <div className={styles.info}>
          <h4>Contacto directo</h4>
          <p>Email: <a href="mailto:hola@jmcdev.com">hola@jmcdev.com</a></p>
          <p>WhatsApp: <a href="https://wa.me/5491123456789" target="_blank" rel="noopener noreferrer">+54 9 11 2345-6789</a></p>
        </div>
      </div>
    </section>
  );
}
