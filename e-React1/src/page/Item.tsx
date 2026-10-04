import { useNavigate, useParams } from "react-router-dom"




export default function Itempage (){

 const {id} =useParams()
 const navigate =useNavigate()

 
 return (
  <div>
  <h1> We have single item here</h1>
  <button onClick={()=>{navigate("/")}}>Home</button>
  </div>

 )
}