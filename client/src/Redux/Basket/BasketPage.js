import React, { useEffect, useState, useRef } from "react"; 
import useAuth from "../Auth/useAuth";
import "../../css/BasketPage.css";

import { OrderList } from 'primereact/orderlist'; 
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';

import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'; 

import { useGetBasketQuery, useDeleteBasketMutation, useAddBasketMutation } from "./BasketApiSlice";

const BasketPage = () => {
    const { data: basket = [], isSuccess } = useGetBasketQuery();
    const [deleteItem] = useDeleteBasketMutation(); 
    const [addItem] = useAddBasketMutation(); 

    const [totalQuantity, setTotalQuantity] = useState(0); 
    const [authData] = useAuth();
    const userName = authData.firstName;

    useEffect(() => {
        if (isSuccess) {
            let sumAmount = 0;
            basket.forEach(p => {
                sumAmount += p.Qentity; 
            });
            setTotalQuantity(sumAmount);
        }
    }, [isSuccess, basket]); 

    const itemTemplate = (item) => {
        return (
            <div className="flex flex-wrap p-2 align-items-center gap-3">
                <img
                    className="w-4rem h-4rem shadow-2 flex-shrink-0 border-round" // גודל תמונה 4rem
                    src={item.ProuductId?.imageUrl || 'https://primefaces.org/cdn/primereact/images/product/galaxy-s5.jpg'} 
                    alt={item.ProuductId?.name || 'מוצר'}
                    style={{ objectFit: 'cover' }}
                />
                <div className="flex-1 flex flex-column gap-2 xl:mr-8 text-right" style={{ direction: 'rtl' }}>
                    <span className="font-bold">{item.ProuductId?.name || 'שם מוצר לא ידוע'}</span>
                    <div className="flex align-items-center justify-content-end gap-2 text-sm">
                        <i className="pi pi-tag text-sm"></i>
                        <span>{item.ProuductId?.category || 'קטגוריה לא ידועה'}</span>
                    </div>
                </div>
                <div className="flex flex-column align-items-center gap-2">
                    <span className="font-bold text-900">{item.ProuductId?.price * item.Qentity || 0} ₪</span>
                    <div className="flex align-items-center gap-2">
                        <Button
                            icon="pi pi-minus"
                            className="p-button-rounded p-button-secondary p-button-sm"
                            onClick={() => {
                                addItem({ ProuductId: item.ProuductId._id, Qentity: -1 });
                                setTotalQuantity(prev => prev - 1); 
                            }}
                            disabled={item.Qentity <= 1} 
                            aria-label="הפחת כמות"
                        />
                        <span className="text-xl font-medium">{item.Qentity}</span>
                        <Button
                            icon="pi pi-plus"
                            className="p-button-rounded p-button-secondary p-button-sm"
                            onClick={() => {
                                addItem({ ProuductId: item.ProuductId._id, Qentity: 1 });
                                setTotalQuantity(prev => prev + 1); 
                            }}
                            aria-label="הוסף כמות"
                        />
                    </div>
                    <Button
                        label="מחק"
                        icon="pi pi-trash"
                        severity="danger" 
                        className="p-button-sm mt-2"
                        onClick={() => deleteItem(item._id)}
                        aria-label="מחק מוצר"
                    />
                </div>
            </div>
        );
    };
    
    return (
        <div className="card my-5 mx-auto p-4 md:p-5" style={{ maxWidth: '960px' }}>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
                סל הקניות של {userName}
                <Badge value={totalQuantity} severity="info" className="ml-2" />
            </h1>
            <p className="text-center text-lg text-600 mb-5">
                מוצרים בסל: {basket.length}
            </p>

            {basket.length > 0 ? (
                <OrderList
                    value={basket} 
                    itemTemplate={itemTemplate} 
                    header="פריטים בסל"
                    dataKey="_id" 
                    className="w-full"
                />
            ) : (
                <div className="text-center p-5 surface-100 border-round">
                    <i className="pi pi-shopping-cart" style={{ fontSize: '3rem', color: 'var(--text-color-secondary)' }}></i>
                    <p className="text-xl mt-3 text-700">הסל שלך ריק כרגע.</p>
                </div>
            )}

            {basket.length > 0 && (
                <div className="flex justify-content-end align-items-center mt-5 p-3 surface-100 border-round">
                    <span className="text-2xl font-bold text-green-600 mr-3">
                        סה"כ לתשלום:{" "}
                        {basket.reduce((acc, item) => acc + (item.ProuductId?.price || 0) * item.Qentity, 0)} ₪
                    </span>
                    <Button label="המשך לקופה" icon="pi pi-check" severity="success" className="p-button-lg" />
                </div>
            )}
        </div>
    );
}

export default BasketPage;