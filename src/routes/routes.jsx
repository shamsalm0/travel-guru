import { createBrowserRouter } from "react-router-dom";
import Home from "../../src/pages/Home/Home";
import Main from "../Main/Main";

export const router=createBrowserRouter(
    [
        {
            path:'/',
            element:<Main></Main>,
            loader:()=>fetch('http://localhost:8001/travellingPlaces'),
            children:[
                {
                    path:'/home',
                    element:<Home></Home>,
                    loader:()=>fetch('http://localhost:8001/travellingPlaces')
                }
            ]
        }
    ]
)