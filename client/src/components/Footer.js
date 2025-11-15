import React from 'react';
import '../css/Footer.css'; 

const Footer = () => {
  return (
  
    <footer className="footer-container">
      <div className="footer-top-section">
        <div className="footer-logo">
          <img
              src={process.env.PUBLIC_URL + `/תמונות פרויקט/oz.png`}
              alt={`תמונה של oz`}
            />
        </div>

        <div className="footer-links-group">
          <h4>מידע מהיר</h4>
          <ul>
            <li><a href="#about" >אודות</a></li>
            <li><a href="#terms">הצלחת תצוגה</a></li>
            <li><a href="#delivery">אספקה</a></li>
            <li><a href="#warranty">מאמרים</a></li>
            <li><a href="#privacy">הצהרת נגישות</a></li>
            <li><a href="#contact">צור קשר</a></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>עיצוב</h4>
          <ul>
            <li><a href="#design-tips">ריצוף פנים</a></li>
            <li><a href="#modern-design">ריצוף חוץ / בריכה</a></li>
            <li><a href="#classic-design">ריצוף לחדרי רחצה</a></li>
            <li><a href="#minimalist-design">ריצוף ובמטבח</a></li>
            <li><a href="#industrial-design">דמוי פרקט</a></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>חיפוי קירות</h4>
          <ul>
            <li><a href="#wall-tiles">חיפוי פנים</a></li>
            <li><a href="#outdoor-walls">חיפוי חוץ</a></li>
            <li><a href="#bathroom-walls">חיפוי אמבט</a></li>
            <li><a href="#kitchen-walls">חיפוי ומטבח</a></li>
            <li><a href="#patterned-tiles">דמוי פרקט</a></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>חדרי אמבט</h4>
          <ul>
            <li><a href="#showers">כללי</a></li>
            <li><a href="#baths">אסלות</a></li>
            <li><a href="#sinks">Free Standing</a></li>
            <li><a href="#cabinets">ארונות</a></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>כלים סניטריים</h4>
          <ul>
            <li><a href="#toilets">אסלות</a></li>
            <li><a href="#taps">ברזים לאמבט</a></li>
            <li><a href="#showers">ברזים למטבח</a></li>
            <li><a href="#bathroom-accessories">כיורי אמבט</a></li>
            <li><a href="#kitchen-sinks">לחצנים ומכל הדחה</a></li>
            <li><a href="#other">פרזול</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-section">
        <p className="copyright-text">
          &copy; 2025 כל הקרמיקה בע"מ. כל הזכויות שמורות.
        </p>
        <p className="credit-text">
          Crafted with ❤️ by mDesign
        </p>
      </div>
    </footer>
  );
};

export default Footer;