import React, { useContext, useState } from 'react';
import Father from '../Father/Father';
import Aunty from '../Aunty/Aunty';
import Cusin from '../Cusin/Cusin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Auncle = () => {
    const [money, setMoney]= useContext(MoneyContext);
    return (
        <div>
            <h2>Auncle</h2>
            <p><small>GrandPa Money: {money}</small></p>
            <button onClick={()=> setMoney(money+1000)}>send 1000</button>
            <section className='flex'>
                <Cusin>Nabil</Cusin>
                <Cusin>Nabila</Cusin>
            </section>
            
        </div>
    );
};

export default Auncle;