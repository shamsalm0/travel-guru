import { createBrowserRouter } from "react-router-dom";
import Home from "../../src/pages/Home/Home";
import Main from "../Main/Main";
import Booking from "../pages/Booking/Booking";

export const router=createBrowserRouter(
    [
        {
            path:'/',
            element:<Main></Main>,
            loader:()=>fetch('https://travel-guru-server-shamsalm0.vercel.app/travellingPlaces'),
            children:[
                {
                    path:'/home',
                    element:<Home></Home>,
                    loader:()=>fetch('https://travel-guru-server-shamsalm0.vercel.app/travellingPlaces')
                },
                {
                    path:'/booking/:id',
                    element:<Booking></Booking>,
                    loader:({params})=>fetch(`https://travel-guru-server-silk.vercel.app/travellingPlaces/${params.id}`)
                }
            ]
        }
    ]
)