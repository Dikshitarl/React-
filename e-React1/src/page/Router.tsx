import {  createBrowserRouter,RouterProvider } from "react-router-dom"
import Layout from "./Layouts";
import Homepage from "./Home";
import { Items } from "./Items";
import Error from "./Error";
import Itempage from "./Item";

const router =createBrowserRouter([
 {
  path:'/',
  element:<Layout/>,
  errorElement:<Error/>,
  children:
  [

   {
    element:<Homepage></Homepage>,
    path:"/"
   },

   {
    element :<Items/>,
    path:"/items"
   },

   {
    element:<Itempage/>,
    path:"/item/id"
   }


  ]
 }
])


export default function AppRouter(){

 return (
    <RouterProvider router={router}/>

 )
}