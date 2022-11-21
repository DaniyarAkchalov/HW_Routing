import { getVegetables } from "../../data/vegetables";
import { useState } from "react";
import { Context } from "../../contex";
import { getFruits } from "../../data/fruits";
import { Routes, Route } from "react-router-dom";
import FruitsPage from "../pages/FruitsPage";
import VegetablesPage from "../pages/VegetablesPage";
import NavMenu from "../NavMenu";

function App() {
  const [vegetables] = useState(getVegetables);
  const [fruits] = useState(getFruits);

  return ( 
    <div>
      <Context.Provider value={{ vegetables, fruits }}>
        <NavMenu />
        <Routes>
          <Route path="/fruits_page" element={<FruitsPage />} />
          <Route path="/vegetables_page" element={<VegetablesPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
