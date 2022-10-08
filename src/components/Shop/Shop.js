import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);

    // useState for event handler 
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    // for load data form localStorage and set data from local storage
    useEffect(() => {
        const storedCart = getStoreCart();

        const savedCart = [];

        // find every id of all cart product 
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);

            if (addedProduct) {

                // qualtity of cart product 
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;

                savedCart.push(addedProduct);

                // console.log(addedProduct);
            }
            setCart(savedCart);
        }
    }, [products])

    // addtocart event handler 
    const handelAddToCart = (seletedProduct) => {
        // console.log(product);

        let newCart = [];

        // check product in cart (exists or not)
        const exists = cart.find(product => product.id === seletedProduct.id);
        // jodi na tahole product er quantity 1 baray dibo 
        if (!exists) {
            seletedProduct.quantity = 1;
            newCart = [...newCart, seletedProduct];
        }
        else {
            // jodi product already thake tahole 
            // jeta add korte chacci seta bade baki gulo amake daow 
            const rest = cart.filter(product => product.id !== seletedProduct.id);
            exists.quantity = exists.quantity + 1;

            newCart = [...rest, exists];
        }


        setCart(newCart);

        // for data add in local storage 
        addToDb(seletedProduct.id)
    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handelAddToCart={handelAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div >
    );
};

export default Shop;