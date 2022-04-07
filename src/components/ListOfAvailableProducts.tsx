import React from 'react';
import { useFetch } from "../hooks/useFetch";

// styles
import './ListOfAvailableProducts.css'

// components
import AvailableItem from './AvailableItem';

const ListOfAvailableProducts = () => {
  const URL = 'http://localhost:3000/items'

  const { data: items, isPending, error } = useFetch(URL)
  return (
    <div className='list-container'>
      <h2>Available products</h2>
      {error ? <p>{error}</p> : null}
      {isPending ? <p>Loading</p> : null}
      {items ? <>{items.map((item) => (
        <AvailableItem item={item}/>
      ))}</> : null}
    </div>
  );
};

export default ListOfAvailableProducts;
