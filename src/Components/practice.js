import { useDispatch } from "react-redux";


const dispatch = useDispatch();

const addItemToCart = async(pizza) => {
    const response = await fetch("http://localhost:5000/api/cart/add", {
        method:"POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(pizza),
    });

    if(!response.ok) {
        const errorMsg = await error.text();
        console.log(errorMsg);
        
    };

    const data = await response.json();
    console.log(data);
    
}

const addItemHandler = async(pizza) => {
    console.log(pizza);
    dispatch(addItem(pizza));
    await addItemToCart(pizza);
    console.log(`${pizza.name} Item added`);
    
    
}