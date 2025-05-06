import React, { useState } from "react";
import styles from "./ServicioCard.module.css";
import CardModal from "../CardModal/CardModal";

export default function ServicioCard({ icon, svg, titulo, descripcion, modalData }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={styles.servicioCard}
        onClick={() => setOpen(true)}
        tabIndex={0}
        role="button"
        style={{ cursor: "pointer" }}
      >
        <div className={styles.icon}>
          {svg ? svg : icon}
        </div>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
      {modalData && (
        <CardModal
          open={open}
          onClose={() => setOpen(false)}
          {...modalData}
        />
      )}
    </>
  );
}
