import React from "react";
import Vegetables from "../Vegetables";
import s from "./index.module.css";
import { Context } from "../../contex";
import { useContext } from "react";

export default function ProductsContainer() {
  const { vegetables } = useContext(Context);
  return (
    <div className={s.vegetables_container}>
      {vegetables

        .sort((a, b) => a.price - b.price)
        .map((el) => (
          <Vegetables key={el.id} {...el} />
        ))}
    </div>
  );
}
