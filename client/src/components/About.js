import '../css/About.css';
import { FaTruck } from 'react-icons/fa';
import ImagOver from '../components/ImagOver'

const About = () => {
    return (
        <>

            <div className="about-section-container">
              <ImagOver></ImagOver>
                <div className="about-text-content">
                <h1 className="main-title">AboutUs </h1>
                    <h3>הרשת שהחלה את דרכה בירושלים לפני 28 שנים, התפתחה והפכה למובילה בעיצוב הבית. הרשת הגדולה בישראל. 14 סניפים מהממים בפריסה ארצית, כשהדובדבן הוא סניף קונספט חדש בבני ברק המעמיד סטנדרטים שלא נראו כמותם בארץ, אולמות תצוגה מרשימים ומבחר ענק של מוצרים טרנדים מכל העולם. לא סתם היא הפייבוריט של המעצבים… חדרי אמבטיה, אריחי הריצוף המדוקדקים וחיפויי הקיר, הכי שיקים ואופנתיים בישראל.</h3>
                    <div className='dunam'><h2 className='d1'>40 דונם של זמינות</h2><FaTruck className='d2' /></div>
                    <h3>בנוסף לדיזיין, השירות והסטייל העיצובי והטרנדיות, הלב של הרשת פועם גם באספקה המיידית, והערכת מלאי מדוייקת. כל זה לא היה קורה ללא המרלו״ג המטורף במישור אדומים, המתפרש על 40 דונם. צריכים אריחים מעכשיו לעכשיו? חיפוי למטבח במיידי? קיבלתם!</h3>
                </div>
            </div>
        </>
    );
};



export default About;