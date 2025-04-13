
import React, { useEffect, useState } from "react";
import axios from "axios";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        const fetchPizzas = async () => {
            const response = await axios.get("http://localhost:5000/api/pizzas");
            setPizzas(response.data);
        };
        fetchPizzas();
    }, []);



    return (
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
            {pizzas.map(pizza => 
                (<PizzaCard key={pizza._id} pizza={pizza}/>)
            )}
        </div>
    );
};

export default PizzaList;

