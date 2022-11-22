import React from "react";
import Fruits from "../Fruits";
import s from "./index.module.css";
import { Context } from "../../contex";
import { useContext } from "react";

export default function FruitsContainer() {
  const { fruits } = useContext(Context);
  return (
    <div className={s.fruits_container}>
      {
      fruits
        .sort((a, b) => a.price - b.price)
        .map(el => <Fruits key={el.id}{...el}  />
        )}
    </div>
     ) };

