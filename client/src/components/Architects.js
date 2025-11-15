import React from 'react';
import '../css/Architects.css'; 
const architectsData = [
  {
    id: 1,
    name: 'תאיר אביאל חן',
    experience: '32 שנות ניסיון',
    imageUrl: 'man.png',
    description: 'מומחה בתכנון ועיצוב מבנים מסחריים.',
  },
  {
    id: 2,
    name: ' שוקי מאיר',
    experience: '25 שנות ניסיון',
    imageUrl: 'man.png',
    description: 'מתמחה באדריכלות נוף ועיצוב אורבני.',
  },
  {
    id: 3,
    name: "אור קצב",
    experience: '18 שנות ניסיון',
    imageUrl: 'man.png',
    description: 'מוביל בתחום האדריכלות הירוקה והקיימות.',
  },
  {
    id: 4,
    name: "טל מאיו הלוי",
    experience: '15 שנות ניסיון',
    imageUrl: 'man.png',
    description: 'מעצב פנים עם התמחות בעיצוב חללי מגורים.',
  },
  {
    id: 5,
    name: 'יוסי פרץ',
    experience: '20 שנות ניסיון',
    imageUrl: 'man.png',
    description: 'אדריכל בכיר עם פרויקטים ציבוריים רבים.',
  },
  {
    id: 6,
    name: 'אורית שמש',
    experience: '10 שנות ניסיון',
    imageUrl: 'man.png',
    description: 'אדריכלית צעירה ופורצת דרך בתחום החדשנות.',
  },
];

const Architects = () => {
  return (
    <div className="architects-section">
      <h2 className="section-title">האדריכלים שלנו</h2>
      <div className="architects-grid-container">
        {architectsData.map((architect) => (
          <div key={architect.id} className="architect-card">
            <img
              src={`${process.env.PUBLIC_URL}/תמונות פרויקט/Architects/ar.png`}
              alt={architect.name}
              className="architect-image"
            />
            <div className="architect-info">
              <h3 className="architect-name">{architect.name}</h3>
              <p className="architect-experience">{architect.experience}</p>
              <p className="architect-description">{architect.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Architects;