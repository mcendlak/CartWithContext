import React, { useState, useContext } from 'react';

// types
import { IItemData } from '../types'

// styles
import './AvailableProduct.css'

// context
import CartContext from '../context/CartContext'

interface AvailableProductProps {
  item: IItemData
}

const AvailableProduct = ({item}: AvailableProductProps) => {
  const [isAvailable, setIsAvailable] = useState(true)

  const {addProduct} = useContext(CartContext)

  return (
    <div className='item'>
      <p>{item.name}</p>
      <p>price: {item.price}</p>
      <p>in stock: {item.quantity}</p>
      <button onClick={() => addProduct(item)}>Add to cart</button>
    </div>
  );
};

export default AvailableProduct;
