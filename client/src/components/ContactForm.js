import React, { useState } from 'react';
import '../css/ContactForm.css';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
    const [interest, setInterest] = useState('');
    const [branch, setBranch] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const Navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        setInterest('');
        setBranch('');
        setFullName('');
        setEmail('');
        setPhone('');
        Navigate("/Thank")
    };


    return (
        <div className="main-contact-layout">
            <div className="contact-form-card">
                <div className="contact-header">
                    <div className="header-top-row">
                        <div className="contact-icon"></div>
                        <h1 className="contact-title">יצירת קשר</h1>
                        <div className="whatsapp-icon-container">
                            <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="whatsapp-icon" />
                            </a>
                        </div>
                    </div>
                    <p className="contact-description">מלא/י פרטים ונציגינו יחזרו אליך בהקדם:</p>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="interest" className="sr-only">במה אתה/ה מתעניין/ת?</label>
                        <select
                            id="interest"
                            className="form-control"
                            value={interest}
                            onChange={(e) => setInterest(e.target.value)}
                            required
                        >
                            <option value="" disabled hidden>במה אתה/ה מתעניין/ת? *</option>
                            <option value="option1">ברור חשבון</option>
                            <option value="option2">תקלה באתר</option>
                            <option value="option3">חדרי אמבט</option>
                            <option value="option3"> כלים סניטרים </option>
                            <option value="option3">שיפוץ הבית</option>
                            <option value="option3">כל דבר אחר</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="branch" className="sr-only">בחר/י את הסניף הקרוב לביתך</label>
                        <select
                            id="branch"
                            className="form-control"
                            value={branch}
                            onChange={(e) => setBranch(e.target.value)}
                            required
                        >
                            <option value="" disabled hidden>בחר/י את הסניף הקרוב לביתך *</option>
                            <option value="branch1">סניף תל אביב</option>
                            <option value="branch2">סניף ירושלים</option>
                            <option value="branch3">סניף נתניה</option>
                            <option value="branch3">סניף אשדוד</option>
                            <option value="branch3">סניף בילו</option>
                            <option value="branch3">סניף אשקלון</option>
                            <option value="branch3">סניף הלחי</option>
                            <option value="branch3">סניף ראשון לציון</option>

                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="fullName" className="sr-only">שם מלא</label>
                        <input
                            type="text"
                            id="fullName"
                            className="form-control"
                            placeholder="שם מלא *"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="emailInput" className="sr-only">אימייל</label>
                        <input
                            type="email"
                            id="emailInput"
                            className="form-control"
                            placeholder="אימייל"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phoneInput" className="sr-only">טלפון</label>
                        <input
                            type="tel"
                            id="phoneInput"
                            className="form-control"
                            placeholder="טלפון *"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="submit-button">שליחה</button>
                </form>
            </div>
            <div className="map-container">
                <img
                    src={process.env.PUBLIC_URL + '/תמונות פרויקט/mapa.png'}
                    alt="Map of Israel with branch locations"
                    className="mapa-image"
                />
            </div>
        </div>
    );
};

export default ContactForm;