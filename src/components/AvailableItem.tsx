import React, { useState } from 'react';

// types
import { IItemData } from '../types'

// styles
import './AvailableItem.css'

interface AvailableItemProps {
  item: IItemData
}

const AvailableItem = ({item}: AvailableItemProps) => {
  const [isAvailable, setIsAvailable] = useState(true)

  return (
    <div className='item'>
      <p>{item.name}</p>
      <p>price: {item.price}</p>
      <p>in stock: {item.quantity}</p>
      <button>Add to cart</button>
    </div>
  );
};

export default AvailableItem;
