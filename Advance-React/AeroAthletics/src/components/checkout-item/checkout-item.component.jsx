import './checkout-item.styles.scss';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.contex';

const CheckoutItem = ({ cartItem }) => {
    const { addItemToCart, removeItemFromCart, clearCartItem } = useContext(CartContext);
    const { name, imageUrl, price, id } = cartItem;

    const quantityClicker = (cartItem) => {
        const { quantity } = cartItem;

        const increment = () => {
            return addItemToCart(cartItem);
        }
        const decrement = () => {
            return removeItemFromCart(cartItem);
            
        }

        return (
            <span className="quantity"> 
                <div onClick={decrement} className="arrow"> &#10094; </div>
                <span className="value">{quantity}</span>
                <div onClick={increment} className="arrow"> &#10095; </div>
            </span>
        );
    }

    const removeCartItem = () => { 
        clearCartItem(cartItem);
    }


    return (
            <div className="checkout-item-container" key={id}>
                <div className='image-container'>
                    <img className="image-container"
                        src={imageUrl}
                        alt={`${name}`}></img> 
                </div>
                <span className="name">{name}</span>
                {quantityClicker(cartItem)}
                <span className="price"> $ {price} </span>
                <div onClick={removeCartItem} className="remove-button"> &#10005; </div>
            </div>
        )
    
    
}

// prop - types
CheckoutItem.propTypes = {
    cartItem: PropTypes.shape({
        name: PropTypes.string,
        imageUrl: PropTypes.string,
        price: PropTypes.number,
        id: PropTypes.number,
        quantity: PropTypes.number
    })
}

export default CheckoutItem;