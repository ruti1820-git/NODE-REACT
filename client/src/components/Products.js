import { useNavigate } from 'react-router-dom';
import "../css/Products.css";

const Products = () => {
    const navigate = useNavigate();

    return (
        <div className="products-container">
            <div className="product-item">
                <h3>כלים סניטריים</h3>
                <img
                    src={process.env.PUBLIC_URL + `/תמונות פרויקט/Products/t.png`}
                    className="project-image"
                    onClick={() => navigate("כלים סניטריים")}
                    alt="כלים סניטריים"
                />
            </div>
            <div className="product-item">
                <h3>ריצוף</h3>
                <img
                    src={process.env.PUBLIC_URL + `/תמונות פרויקט/Products/r.png`}
                    className="project-image"
                    onClick={() => navigate("ריצוף")}
                    alt="ריצוף"
                />
            </div>
            <div className="product-item">
                <h3>חדרי אמבטיה</h3>
                <img
                    src={process.env.PUBLIC_URL + `/תמונות פרויקט/Products/b.png`}
                    className="project-image"
                    onClick={() => navigate("חדרי אמבטיה")}
                    alt="חדרי אמבטיה"
                />
            </div>
            <div className="product-item">
                <h3>ארונות</h3>
                <img
                    src={process.env.PUBLIC_URL + `/תמונות פרויקט/Products/a.png`}
                    className="project-image"
                    onClick={() => navigate("ארונות")}
                    alt="ארונות"
                />
            </div>
        </div>
    );
};

export default Products;