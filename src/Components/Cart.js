
import { useDispatch } from "react-redux";
import { clearCart } from "../Store/cartSlice";
import { useEffect, useState } from "react";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchCartItems = async() => {
            const response = await fetch("http://localhost:5000/api/cart");
            const data = await response.json();
            setCartItems(data.items);
        }
        fetchCartItems();
    }, []);

    const clearHandler = async() => {
        await fetch('http://localhost:5000/api/cart/clear', {
            method: "DELETE",
        });
        setCartItems([]);
        dispatch(clearCart());

    }
    const handleQuantityChange = async (_id, increment) => {
        const response = await fetch(`http://localhost:5000/api/cart/update/${_id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ increment }),
        });
        if (response.ok) {
            
            const data = await response.json();
            setCartItems(data.items);
        }
    }
    

    if(cartItems.length === 0) {
        return <h1>Cart is empty. Please add the items in the cart</h1>
    }

    const totalPrice = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    return (
        <div>
            <h1>Your Shopping Cart</h1>
            <button className="btn btn-info" onClick={clearHandler} style={{ fontSize:"16px",marginTop: "10px" , blockSize:"50px", width:"160px", backgroundColor:"orange", color:"black", cursor:"pointer"}}>Clear Cart</button>
            <div style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
                {cartItems.map((item) => (
                    <div key={item._id} style={{ display: "flex", alignItems: "center", borderBottom: "1px solid darkblue", padding: "10px" }}>
                        <div style={{ flex: 1, textAlign: "center" }}>
                            <p><b>{item.name}</b></p>
                            <img src={item.image} alt={item.name} style={{ width: "100px", height: "auto" }} />
                        </div>
                        <div style={{ flex: 1, textAlign: "center" }}>
                            <p>{item.description}</p>
                        </div>
                        <div style={{ flex: 1, textAlign: "center" }}>
                            <p>{item.type === "veg" ? <span style={{ color: "green" }}><b>● Veg</b></span> : <span style={{ color: "red" }}><b>● Non-Veg</b></span>}</p>
                        </div>
                        <div style={{ flex: 1, textAlign: "center" }}>
                            <p><b>Rs. {item.price}</b></p>
                        </div>
                        <div style={{ flex: 1, textAlign: "center" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <button onClick={() => handleQuantityChange(item._id, -1)} disabled={item.quantity <= 1}>-</button>
                                <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                                <button onClick={() => handleQuantityChange(item._id, 1)}>+</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h2 style={{ marginTop: "20px" }}>Total Price: Rs. {totalPrice.toFixed(2)}</h2>
        </div>
    );
};


export default Cart;
