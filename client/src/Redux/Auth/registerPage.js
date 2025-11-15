import React, { useState } from 'react';
import { useRegisterMutation } from './authApiSlice';
import '../../css/Register.css';
import { useNavigate } from 'react-router-dom';
import {useEffect} from "react"
const Register = () => {
    const [register, { isError, isSuccess, isLoading, data, error }] = useRegisterMutation();
    const navigate=useNavigate()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
console.log(firstName);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = {
            firstName,
            lastName,
            email,
            phoneNumber,
            address,
            username, 
            password,
        };

        register(formData);
        console.log(formData);

    };
    if (isError) {
        console.error("Registration failed:", error);
    }
    useEffect(() => {
        if (isSuccess) {
            navigate("/login");  
        }
    }, [isSuccess]);


    return (
        <div className="registerPage">
            <h2>הרשמה</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="form">
                    <label htmlFor="firstName">שם פרטי:</label>
                    <input
                        className="formInput"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="הכנס שם פרטי"
                        required
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="lastName">שם משפחה:</label>
                    <input
                        className="formInput"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="הכנס שם משפחה"
                        required
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="email">אימייל:</label>
                    <input
                        className="formInput"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="הכנס כתובת אימייל"
                        required
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="phone">טלפון:</label>
                    <input
                        className="formInput"
                        value={phoneNumber}
                        onChange={(e) => setphoneNumber(e.target.value)}
                        placeholder="הכנס מספר טלפון"
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="address">כתובת:</label>
                    <input
                        type="text"
                        id="address"
                        className="formInput"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="הכנס כתובת מלאה"
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="username">שם משתמש:</label>
                    <input
                        className="formInput"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="בחר שם משתמש"
                        required
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="password">סיסמא:</label>
                    <input
                        type="password"
                        id="password"
                        className="formInput"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="בחר סיסמא"
                        required
                    />
                </div>

                <button type="submit" className="registerButton">הירשם</button>
            </form>
            {isError && <p className="error">הייתה שגיאה: {error.message}</p>}
            {isSuccess && <p className="success">הרישום הצליח!</p>}
            {isLoading && <p>טוען...</p>}
        </div>
    );
}
 export default Register;