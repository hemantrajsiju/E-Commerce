import React from 'react';
import "./FilterMenu.css";
import { Funnel } from 'phosphor-react';


export const FilterMenu = ({category, setCategory}) => {
    console.log(category, " 6886545")
  return (
    <div className='menu'>
    <div className='funnel'><Funnel size={32} weight="bold"/></div>
    <div onClick={()=> setCategory(null)} className="eletronics"> ALL </div>
      <div onClick={()=> setCategory("Electronic")} className="eletronics"> Electronic </div>
      <div onClick={()=> setCategory("clothing")}  className="clothing"> Clothings </div>
      <div  onClick={()=> setCategory("furniture")}  className="furniture"> Furnitures </div>
      <div  onClick={()=> setCategory("vehicles")}  className="vehicles"> Vehicles </div>
    </div>
  )
};

