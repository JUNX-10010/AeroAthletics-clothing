import "./cart-item.styles.scss";
import PropType from "prop-types";

// import React from 'react';
// var __jsx = React.createElement;



const CartItem = ({cartItem}) => {
    const { name, quantity, imageUrl, price } = cartItem;
    return (
        <div className="cart-item-container" >
            <img src={imageUrl} alt="item-image" />
            <div className="item-details">
                <span className="name" >{name}</span>
                <span>{quantity} X ${price} </span>
            </div>
        </div>
    )

};

CartItem.propTypes = {
    cartItem: PropType.object
};


export default CartItem;