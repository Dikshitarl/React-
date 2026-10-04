import { Outlet,Link } from "react-router-dom";







export default function Layout(){


 return(


  <div>
   <h2> Inventory Management System </h2>
   <nav>
    <Link to="/Homepage">Home</Link><br/>
    <Link to="/item">Item</Link>
   </nav>
   <main>
    <Outlet/>
   </main>
  </div>
 );
}

