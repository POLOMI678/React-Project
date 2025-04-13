

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Store/cartSlice"; 
import IngredientsCard from "./IngredientsCard"; 
import axios from "axios"; 

const IngredientsList = () => {
    const [toppings, setToppings] = useState([]);
    const [selectedToppings, setSelectedToppings] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchToppings = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/topping'); 
                setToppings(response.data);
            } catch (error) {
                console.error("Error fetching toppings:", error);
            }
        };
        fetchToppings();
    }, []);

    const handleCheckBoxChange = (topping) => {
        setSelectedToppings((prev) => ({
            ...prev,
            [topping._id]: !prev[topping._id], 
        }));
    };

    const handleAddToCart = async () => {
        const pizzaName = "Custom Pizza"; 
        const basePrice = 100; 

        const totalToppingPrice = Object.keys(selectedToppings)
            .filter((key) => selectedToppings[key]) 
            .reduce((total, key) => {
                const topping = toppings.find(t => t._id === key); 
                if (topping) {
                    console.log(`Topping found: ${topping.name} - ${topping.price}`);
                } else {
                    console.log(`Topping not found for key: ${key}`);
                }
                return topping ? total + topping.price : total;
            }, 0);

        const totalPrice = basePrice + totalToppingPrice;

        const firstSelectedToppingKey = Object.keys(selectedToppings).find(key => selectedToppings[key]);
        const toppingImage = firstSelectedToppingKey ? 
            toppings.find(t => t._id === firstSelectedToppingKey)?.image : ""; 

        const isNonVeg = selectedToppings["107"] === true; 

        const pizzaData = {
            _id: firstSelectedToppingKey || "custom-pizza", 
            type: isNonVeg ? "non-veg" : "veg", 
            price: totalPrice,
            name: pizzaName,
            image: toppingImage || "", 
            description: "A delicious custom pizza with your selected toppings.",
            ingredients: ["dough/flour", "pizza sauce", "cheese"],
            topping: Object.keys(selectedToppings).filter(key => selectedToppings[key]),
        
        };

        console.log("Pizza Data before dispatch:", JSON.stringify(pizzaData, null, 2));

        dispatch(addItem(pizzaData)); 

        try {
            const response = await axios.post('http://localhost:5000/api/cart/add', pizzaData);
            console.log("Response from server:", response.data); 
        } catch (error) {
            console.error("Error adding pizza to the cart in the database:", error);
        }
    };

    return (
        <div style={{textAlign:"center"}}>
            <h1 style={{color:"rgb(241, 18, 33)"}}>Build your customised Pizza with your favorite toppings</h1>
            <table style={{margin:"0 auto", borderCollapse:"collapse", width:"50%", backgroundColor:"black" }}>
                <thead>
                    <tr><td></td>
                    <td></td>
                    <td></td></tr>
                    <br></br>
                </thead>
                <tbody>
                    {toppings.map((topping) => (
                        <IngredientsCard
                            key={topping._id} 
                            topping={topping}
                            isSelected={!!selectedToppings[topping._id]} 
                            onCheckBoxChange={() => handleCheckBoxChange(topping)}
                        />
                    ))}
                </tbody>
            </table><br></br>
            <button style={{ fontSize:"16px",marginTop: "10px" , blockSize:"50px", width:"160px", backgroundColor:"orange", color:"black"}} onClick={handleAddToCart}>Build Your Pizza</button><br></br><br></br><hr></hr>
        </div>
    );
};

export default IngredientsList;

