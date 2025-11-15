import React, { useEffect, useState } from "react";
import useAuth from "../Redux/Auth/useAuth";
import '../css/Navigation.css';
import { NavLink, Navigate, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { removeToken } from '../Redux/Auth/AuthSlice'
import { FaFacebookF, FaInstagram, FaYoutube, FaShoppingCart, FaHome } from 'react-icons/fa';
import ProductUpDate from "../Redux/Products/ProductUpDate";

const Navigation = () => {
    const [authData] = useAuth();
    console.log("authData", authData);
    const isUserName = authData.username;
    useEffect(() => {
        console.log(authData);
    }, [authData])
    const isAdmin = authData.roles == "Admin"
    if (!isAdmin) {
        console.log("kkkkkkk");
    }

    const [leshonit, setLeshonit] = useState(false);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(removeToken());
    };

    const navigate = useNavigate();

    return (
        <div className="navigation-container">
            <NavLink to="/">
                <FaHome/>
            </NavLink>
            <NavLink to="/About">אודות</NavLink>
            <div
                className="products-menu-wrapper"
                onMouseEnter={() => setLeshonit(true)}
                onMouseLeave={() => setLeshonit(false)}
            >
                <NavLink to="/Products" className="products-main-link">מוצרים</NavLink>
                {leshonit && (
                    <div className="AllLinkProducts">
                        {/* <NavLink className="LinkProducts" to={"/Products/מטבחים"} >מטבחים</NavLink> */}
                        <NavLink className="LinkProducts" to={"/Products/כלים סניטריים"} >כלים סניטריים</NavLink>
                        <NavLink className="LinkProducts" to={"/Products/ריצוף"} >ריצוף</NavLink>
                        <NavLink className="LinkProducts" to={"/Products/חדרי אמבטיה"} >חדרי אמבטיה</NavLink>
                        <NavLink className="LinkProducts" to={"/Products/ארונות"} >ארונות</NavLink>

                    </div>
                )}
            </div>
            <NavLink to="/Showrooms">אולמות תצוגה</NavLink>

            <NavLink to="/Brands">מותגים</NavLink>
            <NavLink to="/Architects">אדריכלים</NavLink>
            <NavLink to="/Projects">פרוייקטים</NavLink>
            {/* <NavLink to="/Contact">צור קשר</NavLink> */}
            <NavLink to="/Jobs">דרושים</NavLink>

            {!authData?.username ? (
                <>
                    <NavLink to="/Login">התחברות</NavLink>
                    <NavLink to="/Register">הרשמה</NavLink>
                </>
            ) : (
                <>
                    <span>שלום, {authData.username}</span>
                    <button onClick={handleLogout} className="logout-button">יציאה</button>
                </>
            )}

            {isAdmin && <NavLink to="/Admin">מנהל</NavLink>}


            {isUserName && <NavLink to="/Basket" className="cart-icon-link">
                <FaShoppingCart size={24} />
            </NavLink>
            }

            <div className="social-icons">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                    <FaYoutube size={24} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                    <FaInstagram size={24} />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                    <FaFacebookF size={24} />
                </a>
                <img
                    src={`${process.env.PUBLIC_URL}/תמונות פרויקט/oz.png`}
                    className="logo-image"
                    alt="Logo"
                />
            </div>
        </div>
    );
};

export default Navigation;
