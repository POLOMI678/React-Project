import React from "react";

const IngredientsCard = ({topping, isSelected, onCheckBoxChange}) => {
    return (
        <tr>
            <td>
                <img src={topping.image} alt = {topping.tname} style={{width:"100px", height:"100px"}} />
                <hr></hr>
            </td>
            
            <td>
                <br></br><br></br>
                <div style={{fontFamily:"sans-serif", fontSize:"20px", color:"orange"}}>{topping.tname}</div>
                <br></br><br></br>
                <hr></hr>
            </td>
            <td>
            <br></br><br></br>
                
                <div style={{ color:"orange"}}>Rs. {topping.price.toFixed(2)}</div>
                <br></br><br></br>
                <hr></hr>
            </td>

            <td>
            <br></br><br></br>
            <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={onCheckBoxChange}
                    id={`topping-${topping._id}`} 
                />
                <label
                    htmlFor={`topping-${topping._id}`} 
                    style={{ color: "orange", cursor: "pointer" }}
                >
                    {isSelected ? "Added" : "Add"} 
                </label>
                <br></br><br></br><br></br>
                <hr></hr>
            </td>
        </tr>
    );
};

export default IngredientsCard;

