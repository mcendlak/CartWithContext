import React, { useState } from 'react';

// types
import { IItemData } from '../types'

interface ChosenProductProps {
  item: IItemData
}

const ChosenProduct = ({item}: ChosenProductProps) => {
  return (
    <div className='item'>
      <p>{item.name}</p>
      <p>unit price: {item.price}</p>
      <p>amount: {item.quantity}</p>
      <p>total price: {item.quantity * item.price}</p>
    </div>
  );
};

export default ChosenProduct;
