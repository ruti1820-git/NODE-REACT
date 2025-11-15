
import { useEffect, useState } from "react";
import useAuth from "../Redux/Auth/useAuth";
import {useGetProductsQuery} from "../Redux/Products/ProductApiSlice"
import "../css/Basket.css"
const Basket=()=>{

    const [amount, setAmount] = useState(0);  
    const [authData] = useAuth();
   const userName=authData.firstName 
  console.log();




    return(
        <>
        <h1>כמות מוצרים בסך הכל בסל</h1>
        <div className="amount">{amount}</div>
    </>
    )
    }
    export default Basket