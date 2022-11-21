import React from "react";
import s from "./index.module.css";

export default function Vegetables({ title, price, country }) {
  return (
    <div className={s.vegetables_card}>
      <p>Title: {title} </p>
      <p>Price: {price} </p>
      <p>Country: {country} </p>
    </div>
  );
}
