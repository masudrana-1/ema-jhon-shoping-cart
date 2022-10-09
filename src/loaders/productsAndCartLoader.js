import { getStoreCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    // get products 
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // get cart 
    const savedCart = getStoreCart();
    const initialCart = [];
    // console.log('saveCart', savedCart);

    for (const id in savedCart) {
        // console.log(id)
        const addedProduct = products.find(product => product.id === id);
        // console.log(id, addedProduct)
        if (addedProduct) {
            const qualtity = savedCart[id];
            // console.log(id, qualtity)
            addedProduct.qualtity = qualtity;
            initialCart.push(addedProduct);
        }
    }

    return { products: products, initialCart: initialCart };
}