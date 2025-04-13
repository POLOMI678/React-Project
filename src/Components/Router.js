import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PizzaList from "./PizzaList";
import Error from "./Error";
import Cart from "./Cart";
import Home from "./Home";
import IngredientsList from "./IngredientsList";

const Router = createBrowserRouter([
    {
    path:"/",
    element: <App/>,
    children: [
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/Pizzalist",
            element:<PizzaList/>
        },
        {
            path:"/cart",
            element:<Cart/>
        },
        {
            path: "/CreateOwn", 
            element: <IngredientsList />
        },
        
    ],
    errorElement:<Error/>
    }
])

export default Router;