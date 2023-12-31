import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Auncle from "../Auncle/Auncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";
export const RingContext = createContext("gold");
export const  MoneyContext = createContext(0)
const Grandpa = () => {
  const ring = "Diamond";
  const [money, setMoney] = useState(0)
  return (
    <div className="grandpa">
      <h3>GrandPa</h3>
      <p>Has Money : {money}</p>
       <MoneyContext.Provider value={[money, setMoney]}>
       <RingContext.Provider value="golden ring">
          <section className="flex">
            <Father ring={ring}></Father>
            <Auncle></Auncle>
            <Aunty ring={ring}></Aunty>
          </section>
        </RingContext.Provider>
       </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
