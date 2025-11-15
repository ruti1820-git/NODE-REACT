import { useState } from "react"
import "../../css/Admin.css"
import { useNavigate } from "react-router-dom"
import { useAddProductMutation, useDeleteProductMutation, useUpdateProductMutation } from "../Products/ProductApiSlice"
const Admin = () => {
    const [add, { isError, isSuccess, isLoading, data, error }] = useAddProductMutation()
    const Navigate = useNavigate()
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [discription, setDiscription] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [category, setCategory] = useState("")
    
    return (
        <>
            <form>
                <h1>הוסף מוצר</h1>
                <input className="NameAdd" placeholder="הכנס שם מוצר" onChange={(e) => setName(e.target.value)}></input>
                <input className="NameAdd" placeholder=" הכנס מחיר מוצר " onChange={(e) => setPrice(e.target.value)}></input>
                <input className="NameAdd" placeholder="הכנס תאור מוצר" onChange={(e) => setDiscription(e.target.value)}></input>
                <input className="NameAdd" placeholder="הכנס קישור תמונה" onChange={(e) => setImageUrl(e.target.value)}></input>
                <input className="NameAdd" placeholder="הכנס קטגוריה" onChange={(e) => setCategory(e.target.value)}></input>
                <button onClick={() => add({ name, price, discription, imageUrl, category })&& Navigate("/products")}>הוסף</button>
            </form>

        </>)
}

export default Admin