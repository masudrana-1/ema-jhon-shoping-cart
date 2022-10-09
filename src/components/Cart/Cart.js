import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const { cart, clearCart, children } = props;

    // Total price 
    let total = 0;

    // shipping price 
    let shipping = 0;

    // cart product quantity 
    let quantity = 0;

    for (const product of cart) {

        // set quantity of cart product form local storage 
        quantity = quantity + product.quantity;

        // total price of all cart product 
        // total = total + product.price;
        total = total + product.price * product.quantity;


        // total shipping price of all cart product 
        shipping = shipping + product.shipping;
    }

    // count total tax price  
    // const tax = total * (10/100);
    // toFixed use korle seta string a convert hoye jay
    // tai string k abar number a convert korte hobe 
    const tax = parseFloat((total * 0.1).toFixed(2));


    // Grand total price 
    const grandTotal = (total + shipping + tax).toFixed(2);

    return (
        <div className='cart'>
            <h4>Order summery</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total shipping: ${shipping}</p>
            <p>Tax: {tax}</p>
            <h4>Grand Total: {grandTotal}</h4>
            <button onClick={clearCart}>Clear Cart</button>
            {children}
        </div>
    );
};

export default Cart;