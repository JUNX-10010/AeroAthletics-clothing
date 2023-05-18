import "./product-card.styles.scss"
import Button from "../button/button.component";
import PropTypes from "prop-types";


const ProductCard = ({products}) => {
    const { name, imageUrl, price } = products;
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}></img>
            <div className="footer">
                <span className="name">{ name }</span>
                <span className="price">{ price }</span>
            </div>
            <Button buttonType='inverted' >ADD TO CART</Button>
        </div>
        
    )
}

ProductCard.propTypes = {
    products: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })
}



export default ProductCard;