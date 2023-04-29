import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
    const { id, productName, price, productImages } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemsAmount = cartItems[id]

  return (
    <div className='product'>
    <img src={productImages} alt={productName}/>
    <div className='description'>
        <p>
            <b>{productName}</b>
        </p>
        <p> Rs.{price}</p>
    </div>
    <button className='addToCartButton' onClick={() => addToCart(id) } > Add To Cart {cartItemsAmount > 0 && <>({cartItemsAmount})</>} </button>
    </div>
  )
};

