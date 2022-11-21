import React from "react";
import Fruits from "../Fruits";
import s from "./index.module.css";
import { Context } from "../../contex";
import { useContext } from "react";

export default function FruitsContainer() {
  const { fruits } = useContext(Context);
  return (
    <div className={s.fruits_container}>
      {fruits.map((el) => (
        <Fruits {...el} key={el.id} />
      ))}
    </div>
  );
}
