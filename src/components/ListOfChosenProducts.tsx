// hooks
import { useContext } from 'react';

// styles
import './ListOfChosenProducts.css'

// context
import CartContext from '../context/CartContext';
import ChosenProduct from './ChosenProduct';

const ListOfChosenProducts = () => {
  const ctx = useContext(CartContext)

  return (
    <div className='chosen-products'>
      <h2>Your basket</h2>
      {ctx.state.items.map(item => (
        <ChosenProduct item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ListOfChosenProducts;
