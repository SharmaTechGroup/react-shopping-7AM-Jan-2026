import { createBrowserRouter } from "react-router-dom";
import { FoodIndex } from "../food-delivery/food-index";
import { NotFound } from "../food-delivery/not-found";
import { FoodMenu } from "../food-delivery/food-menu";
import { MenuDetails } from "../food-delivery/menu-details";
import { FoodHome } from "../food-delivery/food-home";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <FoodIndex />,
        errorElement: <NotFound />
    },
    {
       path:"/home",
       element: <FoodHome />
    },
    {
        path:'/menu',
        element: <FoodMenu />,
        children: [
             {
                path:'details',
                element: <MenuDetails />
             }
        ]
    },
    {
        path:'*',
        element: <NotFound /> 
    }
])