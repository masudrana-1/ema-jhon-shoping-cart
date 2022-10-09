import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product, handelRemoveItem }) => {
    const { name, price, quantity, img, shipping, id } = product;


    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details-container'>
                <div className='review-details'>
                    <h2>{name}</h2>
                    <p>Price: {price}</p>
                    <p>Shipping: {shipping}</p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className='delete-container'>
                    <button onClick={() => handelRemoveItem(id)} className='button-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;