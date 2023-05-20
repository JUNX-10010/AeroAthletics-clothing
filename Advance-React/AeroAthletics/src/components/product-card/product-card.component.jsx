import "./product-card.styles.scss"
import Button from "../button/button.component";
import PropTypes from "prop-types";
import { useContext } from "react";
import CartContext from "../../contexts/cart.contex";

const ProductCard = ({product}) => {
    const { name, imageUrl, price } = product;
    const { addItemToCart } = useContext(CartContext);
    
    const addProductToCart = () => {
        addItemToCart(product);
    };

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}></img>
            <div className="footer">
                <span className="name">{ name }</span>
                <span className="price">{ price }</span>
            </div>
            <Button
                onClick={addProductToCart}
                buttonType='inverted' >
                ADD TO CART
            </Button>
        </div>
        
    )
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })
}



export default ProductCard;