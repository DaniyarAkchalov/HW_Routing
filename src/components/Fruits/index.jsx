import React from "react";
import s from "./index.module.css";

export default function Fruits({ title, price, country }) {
  return (
    <div className={s.fruits_card}>
      <p>Title: {title} </p>
      <p>Price: {price} </p>
      <p>Country: {country} </p>
    </div>
  );
}
