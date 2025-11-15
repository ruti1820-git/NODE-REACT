import '../css/Projects.css';
const Products=()=>{
    const arrImages=[]
    for(let i=1;i<8;i++){
        arrImages.push(
            <img
            src={`${process.env.PUBLIC_URL}/תמונות פרויקט/Project/pp${i}.png`}     
            className="pp-image"
            />
          );
    }
    return(
        <>
         <div className="all-projects">
      <div className="project-grid">
        <div className="project-card">
          <img
            src={`${process.env.PUBLIC_URL}/תמונות פרויקט/Project/p1.jpg`}
            className="project-image"
          />
          <h2 className="description"> חללי לובי בבנייני מגורים </h2>
         
        </div>

        <div className="project-card">
          <img
            src={`${process.env.PUBLIC_URL}/תמונות פרויקט/Project/p2.jpg`}
            className="project-image"
          />
          <h2 className="description">מרחבים וחללים במלונות</h2>
      
        </div>

        <div className="project-card">
          <img
            src={`${process.env.PUBLIC_URL}/תמונות פרויקט/Project/p3.jpg`}
            className="project-image"
          />
          <h2 className="description"> מסעדות ובתי קפה</h2>
        
        </div>
        <div className="project-card">
          <img
            src={`${process.env.PUBLIC_URL}/תמונות פרויקט/Project/p4.jpg`}
            className="project-image"
          />
          <h2 className="description">מרכזי קניות וקניונים</h2>
        
        </div>
        <div className="project-card">
          <img
            src={`${process.env.PUBLIC_URL}/תמונות פרויקט/Project/p5.jpg`}
            className="project-image"
          />
          <h2 className="description"> מבני תעשיה ומשרדים</h2>
         
        </div>
        <div className="project-card">
          <img
            src={`${process.env.PUBLIC_URL}/תמונות פרויקט/Project/p6.jpg`}
            className="project-image"
          />
          <h2 className="description">  רשתות שיווק וחנויות </h2>
          
        </div>
        <div class="title">
    <h4>הלקוחות העסקיים שלנו
    </h4>

</div>
      </div>
    </div>
    <div className="all-image-projects">{arrImages}</div>

    </>
    )
    }
    export default Products