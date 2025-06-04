import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../styles/CategoryCard.module.css";

function CategoryCard({ icon, label, color }) {
  return (
    <div className={style.card}>
      <FontAwesomeIcon icon={icon} size="2x" color={color} />
      <div className={style.label}>{label}</div>
    </div>
  );
}

export default CategoryCard;