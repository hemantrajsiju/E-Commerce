import React, {useState} from 'react'
import { PRODUCTS } from '../../product';
import { Product } from './product'; 
import "./shop.css";
import { FilterMenu } from './FilterMenu';

export const Shop = () => {

  const [category, setCategory] = useState(null)

  const filterProducts = category!==null ? PRODUCTS.filter((prod)=> prod.category === category) : PRODUCTS
  return (
    <div className='shop'>
      <FilterMenu category={category} setCategory={setCategory} />
        <div className='shopTitle'>
            <h1> Meraki Shop</h1>
        </div>
        <div className='products'> {filterProducts.map((product) => (
            <Product key={product.id}  data={product} />
        ))}

        </div>
    </div>
  )
};

