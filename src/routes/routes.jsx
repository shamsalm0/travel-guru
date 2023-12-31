import { createBrowserRouter } from "react-router-dom";
import Home from "../../src/pages/Home/Home";
import Main from "../Main/Main";
import Booking from "../pages/Booking/Booking";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Hotel from "../components/Hotel/Hotel";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import SignIn from "../components/SignIn/SignIn";

export const router=createBrowserRouter(
    [
        {
            path:'/',
            element:<Main></Main>,
            loader:()=>fetch('https://travel-guru-server-shamsalm0.vercel.app/travellingPlaces'),
            children:[
                {
                    path:'/',
                    element:<Home></Home>,
                    loader:()=>fetch('https://travel-guru-server-h63x.vercel.app/travellingPlaces')
                },
                {
                    path:'/booking/:id',
                    element:<Booking></Booking>,
                    loader:({params})=>fetch(`https://travel-guru-server-h63x.vercel.app/travellingPlaces/${params.id}`)
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/signup',
                    element:<SignUp></SignUp>
                },
                {
                   path:'/signin',
                   element:<SignIn></SignIn> 
                },
                {
                    path:'/hotel/:id',
                    loader:({params})=>fetch(`https://travel-guru-server-h63x.vercel.app/bookingHotel/${params.id}`),
                    element:<PrivateRoute><Hotel></Hotel></PrivateRoute>
                    
                }
            ]
        }
    ]
)