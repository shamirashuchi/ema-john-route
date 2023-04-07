import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    let totalprice =0;
    let totalshipping = 0;
    let quantity = 0;
    for(const product of cart){
        //product.quantity = product.quantity || 1;
        
        totalprice = totalprice + product.price*product.quantity;
        totalshipping = totalshipping + product.shipping;
        quantity = quantity + product.quantity;
        
        
    }
    const tax = totalprice*7/100;
    const grandtotal = totalprice + totalshipping + tax;
    return (
        <div className='cart'>
            <h4>order summery</h4>
                <p>Selected Items: {quantity}</p> 
                <p>Total Price:  ${totalprice}</p>
                <p>Shipping: {totalshipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h6>Grand Total: ${grandtotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;