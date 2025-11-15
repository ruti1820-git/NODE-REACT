import '../css/Brands.css'

const Brands = () => {
    const imageElements = []; 
  
    for (let i = 0; i < 33; i++) {
      imageElements.push(
        <img
          src={process.env.PUBLIC_URL + `/תמונות פרויקט/Brands/b${i + 1}.png`}
          alt={`תמונה של מתחם לוגיסטי/אולם תצוגה ${i + 1}`}
          className="Brands-image"
        />
      );
    }
  
    return (
      <>
        <div className="brands-container">
          {imageElements} 
        </div>
      </>
    );
  };
  
  export default Brands;