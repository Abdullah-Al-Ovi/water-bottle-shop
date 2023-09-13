import { useState } from "react";
import { useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import './bottles.css'

import Cart from "../Cart/Cart";
import { getFromLocalStorage, removeFromLocalStorage, addToLocalStorage, setToLocalStorage } from "../utils/utils";



const Bottles = () => {
    const[bottles,setBottles]=useState([])
    const[bottleCart,setBottleCart]=useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json')
        .then(rse=>rse.json())
        .then(data=>setBottles(data))
    },[])

    useEffect(()=>{
        const storedCart = getFromLocalStorage();
        setBottleCart(storedCart)
        // console.log(bottleCart);
        
    },[bottles])

    const handleCart = (bottle)=>{
        const newBottleCart =[...bottleCart,bottle];
        setBottleCart(newBottleCart);
        addToLocalStorage(bottle);
    }
    const handleRemove =(bottleInfo)=>{
        const newBottleCart = removeFromLocalStorage(bottleInfo);
        setToLocalStorage(newBottleCart);
        setBottleCart(newBottleCart)
    }
    return (
        <div>
            <h2>Bottles type : {bottles.length}</h2>
            
            
            <h3>Cart : {bottleCart.length}</h3>
            <Cart bottleCart={bottleCart} handleRemove={handleRemove}></Cart>
               
           
            <div className="container">
             {
                bottles.map(bottle=><Bottle key={bottles.id} bottle={bottle} handleCart={handleCart}></Bottle>)
            }
            </div>

        </div>
    );
};

export default Bottles;