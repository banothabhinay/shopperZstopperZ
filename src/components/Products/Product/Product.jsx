import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";
const Product = () => {
    return (
        <div className="product-card">
            <div className="image">
                <img src={prod} alt=""/>
            </div>
            <div className="p-detail">
                <span className="name">Name</span>
                <span className="price">&#8377;999</span>
            </div>
        </div>
    );
};

export default Product; 
