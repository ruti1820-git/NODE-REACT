import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "./ProductApiSlice";
import { useEffect, useState } from "react";
import { useUpdateProductMutation, useDeleteProductMutation } from "./ProductApiSlice";
import useAuth from "../Auth/useAuth";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useAddBasketMutation } from "../Basket/BasketApiSlice"
import "../../css/ProductPage.css"
const ProductUpDate = () => {
    const [authData] = useAuth();
    const isAdmin = authData.roles === "Admin";
    console.log(authData.firstName);
    const isUserName = authData.username;

    const [visible, setVisible] = useState(false);

    const [update] = useUpdateProductMutation();
    const [Delete] = useDeleteProductMutation();
    const [Basket, StatusBasket] = useAddBasketMutation();


    const { category } = useParams();
    const { data, isError, isSuccess, isLoading } = useGetProductsQuery();
    const [products, setProducts] = useState([]);

    const [upProduct, setupProduct] = useState(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [discription, setDiscription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [categoryInput, setCategory] = useState("");
    useEffect(() => {
        if (isSuccess) {
            const filteredProducts = data.filter(p => p.category === category);
            setProducts(filteredProducts);
        }
    }, [isSuccess, category, data]);

    const handleEditClick = (product) => {
        setupProduct(product);
        setName(product.name);
        setPrice(product.price);
        setDiscription(product.description);
        setImageUrl(product.imageUrl);
        setCategory(product.category);
        setVisible(true);
    };

    const handleUpdate = () => {
        const updatedData = {
            id: upProduct._id,
            name,
            price,
            description: discription,
            category: categoryInput,
            imageUrl
        };
        if (upProduct && upProduct._id) {
            update(updatedData);
        }
    };

    return (
        <div>
            {isLoading && <p>טוען מוצרים...</p>}
            {isError && <p>אירעה שגיאה בטעינת המוצרים</p>}
            {!isLoading && !isError && (
                <>
                    <div className="cart-grid">
                        {products.map(p => (
                            <div key={p._id} className="cartP" >
                                <img src={p.imageUrl} className="imageProduct" />
                                {isAdmin && <button className="bb" onClick={() => handleEditClick(p)}><h2>עדכן מוצר</h2></button>}
                                <br></br>
                                {isAdmin && <button className="bb" onClick={() => Delete(p._id)}><h2>מחק מוצר</h2></button>}
                                {isUserName && <button onClick={() => Basket({ Qentity: 1, ProuductId: p._id })}> ➕ הוסף לסל</button>}
                            </div>
                        ))}
                    </div>

                    {upProduct && (
                        <Dialog
                            header="עדכון מוצר"
                            visible={visible}
                            style={{ width: '40vw' }}
                            onHide={() => setVisible(false)}
                            footer={
                                <div>

                                    <Button label="סגור" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
                                    <Button label="עדכן" icon="pi pi-check" onClick={() => { handleUpdate(); setVisible(false); }} autoFocus />
                                </div>
                            }
                        >
                            <div className="p-fluid" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <h1>הוסף מוצר</h1>
                                <input
                                    className="p-inputtext"
                                    placeholder="הכנס שם מוצר"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    className="p-inputtext"
                                    placeholder="הכנס מחיר מוצר"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                                <input
                                    className="p-inputtext"
                                    placeholder="הכנס תאור מוצר"
                                    value={discription}
                                    onChange={(e) => setDiscription(e.target.value)}
                                />
                                <input
                                    className="p-inputtext"
                                    placeholder="הכנס קישור תמונה"
                                    value={imageUrl}
                                    onChange={(e) => setImageUrl(e.target.value)}
                                />
                                <input
                                    className="p-inputtext"
                                    placeholder="הכנס קטגוריה"
                                    value={categoryInput}
                                    onChange={(e) => setCategory(e.target.value)}
                                />
                            </div>
                        </Dialog>
                    )}
                </>
            )}
        </div>
    );
};

export default ProductUpDate;