
import React, { useState } from 'react';
import '../css/Showrooms.css';
const Showrooms = () => {
    const [showMore, setShowMore] = useState(false);
    const [showMore1, setShowMore1] = useState(false);
    const [showMore2, setShowMore2] = useState(false);
    const [showMore3, setShowMore3] = useState(false);
    const [showMore4, setShowMore4] = useState(false);

    const changeMore = () => {
        setShowMore(!showMore);
    };
    const changeMore1 = () => {
        setShowMore1(!showMore1);
    };
    const changeMore2 = () => {
        setShowMore2(!showMore2);
    };
    const changeMore3 = () => {
        setShowMore3(!showMore3);
    }; const changeMore4 = () => {
        setShowMore4(!showMore4);
    };
    return (
        <>
            <div className="showroom-header-container">
                <h2>אשדוד</h2>
                <h2>העבודה 59</h2>
                <button onClick={changeMore} className="more-button" aria-expanded={showMore}>
                    {showMore ? 'הסתר מידע' : 'למידע נוסף'}
                </button>
            </div>
            {showMore && (
                <div className="allMore">
                    <div className="info-row">
                        <div className="info-column">
                            <h3>שעות פתיחה אשדוד:</h3>
                            <p>א-ה: 09:00-18:00</p>
                            <p>יום ו: 09:00-13:00</p>
                        </div>
                        <div className="info-column">
                            <h3>שירות לקוחות וקבלת קהל:</h3>
                            <p>08-6550000</p>
                        </div>
                        <div className="info-column">
                            <h3>מנהלת הסניף:</h3>
                            <p>קרולין שונק</p>
                            <p>דוא"ל: carolin@oz-ceramica.co.il</p>
                        </div>
                    </div>
                </div>
            )}

            <div className="showroom-header-container">
                <h2>אשקלון</h2>
                <h2>הפלדה 7</h2>
                <button onClick={changeMore1} className="more-button" aria-expanded={showMore1}>
                    {showMore1 ? 'הסתר מידע' : 'למידע נוסף'}
                </button>
            </div>
            {showMore1 && (
                <div className="allMore">
                    <div className="info-row">
                        <div className="info-column">
                            <h3>שעות פתיחה אשקלון:</h3>
                            <p>א-ה: 09:00-18:00</p>
                            <p>יום ו: 09:00-13:00</p>
                        </div>
                        <div className="info-column">
                            <h3>שירות לקוחות וקבלת קהל:</h3>
                            <p>08-6550000</p>
                        </div>
                        <div className="info-column">
                            <h3>מנהל הסניף:</h3>
                            <p>סימו שריקי</p>
                            <p>דוא"ל: simo@oz-ceramica.co.il</p>
                        </div>
                    </div>
                </div>
            )}

            <div className="showroom-header-container">
                <h2>בני ברק</h2>
                <h2>מבצע קדש 47</h2>
                <button onClick={changeMore2} className="more-button" aria-expanded={showMore2}>
                    {showMore2 ? 'הסתר מידע' : 'למידע נוסף'}
                </button>
            </div>
            {showMore2 && (
                <div className="allMore">
                    <div className="info-row">
                        <div className="info-column">
                            <h3>שעות פתיחה בני ברק:</h3>
                            <p>א-ה: 09:00-18:00</p>
                            <p>יום ו: 09:00-13:00</p>
                        </div>
                        <div className="info-column">
                            <h3>שירות לקוחות וקבלת קהל:</h3>
                            <p>08-6550000</p>
                        </div>
                        <div className="info-column">
                            <h3>מנהל הסניף:</h3>
                            <p>סימו שריקי</p>
                            <p>דוא"ל: simo@oz-ceramica.co.il</p>
                        </div>
                    </div>
                </div>
            )}
             <div className="showroom-header-container">
                <h2>פתח תקווה</h2>
                <h2>בן ציון גאליס 7</h2>
                <button onClick={changeMore3} className="more-button" aria-expanded={showMore3}>
                    {showMore3 ? 'הסתר מידע' : 'למידע נוסף'}
                </button>
            </div>
            {showMore3 && (
                <div className="allMore">
                    <div className="info-row">
                        <div className="info-column">
                            <h3>שעות פתיחה פתח תקווה:</h3>
                            <p>א-ה: 09:00-18:00</p>
                            <p>יום ו: 09:00-13:00</p>
                        </div>
                        <div className="info-column">
                            <h3>שירות לקוחות וקבלת קהל:</h3>
                            <p>053-7772947</p>
                        </div>
                        <div className="info-column">
                            <h3>מנהל הסניף:</h3>
                            <p> אבי כהן</p>
                            <p>דוא"ל: avic@oz-ceramica.co.il</p>
                        </div>
                    </div>
                </div>
            )} <div className="showroom-header-container">
            <h2>ירושלים</h2>
            <h2>האומן 32</h2>
            <button onClick={changeMore4} className="more-button" aria-expanded={showMore4}>
                {showMore4? 'הסתר מידע' : 'למידע נוסף'}
            </button>
        </div>
        {showMore4 && (
            <div className="allMore">
                <div className="info-row">
                    <div className="info-column">
                        <h3>שעות פתיחה ירושלים:</h3>
                        <p>א-ה: 09:00-18:00</p>
                        <p>יום ו: 09:00-13:00</p>
                    </div>
                    <div className="info-column">
                        <h3>שירות לקוחות וקבלת קהל:</h3>
                        <p> 052-6565695</p>
                    </div>
                    <div className="info-column">
                        <h3>מנהל הסניף:</h3>
                        <p>ארז אליהו </p>
                        <p>דוא"ל:  erez@oz-ceramica.co.il</p>
                    </div>
                </div>
            </div>
        )}
        </>

    );
}

export default Showrooms;