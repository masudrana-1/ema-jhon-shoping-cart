import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'


const Product = (props) => {
    // console.log(props)

    // destructuring handler and product from props 
    const { handelAddToCart, product } = props;

    // distructuring data from product 
    const { name, seller, ratings, price, img } = product;


    return (
        <div className='product'>
            <img src={img ? img : 'No-Photo-Found'} alt="" />
            <div className='product-info'>
                <h5 className='product-name'>Name: {name}</h5>
                <p>Price: {price}</p>
                <p>Seller: {seller}</p>
                <p>Ratting: {ratings}</p>
            </div>

            {/* add event handler in add to cart button   */}
            <button onClick={() => handelAddToCart(product)} className='button-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;