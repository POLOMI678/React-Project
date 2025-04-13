
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Store/cartSlice";


const PizzaCard = ({ pizza }) => {

    const dispatch = useDispatch();
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);
    
    const buttonStyle = { 
        position:"absolute",
        fontSize:"16px",
        marginTop: "220px" ,
        width:"140px", 
        blockSize:"40px", 
        backgroundColor: hover? "yellow" : "orange", 
        color:"black",
        cursor:"pointer",
    }

    const addItemToCart = async (pizza) => {
        const response = await fetch('http://localhost:5000/api/cart/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pizza),
        });

        if(!response.ok) {
            const errorMsg = await response.text();
            throw new Error(`Http err: ${errorMsg}`);
        }

        const data = await response.json();
        console.log(('cart updated', data));
        
    };

    const addItemHandler = async(pizza) => {
        console.log(pizza);
        
        dispatch(addItem(pizza));
        await addItemToCart(pizza);
        console.log(`${pizza.name} added to cart!`);
        
    };
    

    return (
        <div style={{ display: "flex", border: "2px solid darkblue ", borderRadius: "5px", padding: "1px", width: "100%", maxWidth: "600px" }}>
            
            <div style={{ flex: "1", padding: "1px" }}>
                <h2>{pizza.name}</h2>
                <div>
                    {pizza.type==="veg" ? (
                        <span style={{ color: "green" }}><b>● Veg</b></span>
                    ) : (
                        <span style={{ color: "red" }}><b>● Non-Veg</b></span>
                    )}
                </div>
                <h3 style={{color:"darkblue"}}><b>Rs. {pizza.price.toFixed(2)}</b></h3>
            </div>

            
            <div style={{ flex: "1", padding: "1px", justifyContent:"space-evenly", textAlign:"left"}}>
                <p className="card-text">{pizza.description}</p>
                <p className="card-text"><b>Ingredients:</b> {pizza.ingredients.join(', ')}</p>
                <p className="card-text"><b>Toppings:</b> {pizza.topping.join(', ')}</p>
            </div>

            
            <div style={{ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
                <img height={200} width={250} style={{ borderRadius: "8px",borderBlockColor:"burlywood"}} src={pizza.image} className="card-img-side" alt="Pizza" />
                <button className="order-now" style={buttonStyle}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() =>{addItemHandler(pizza)}} >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};




export default PizzaCard;

