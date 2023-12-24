import Card from '../UI/Card';
import classes from './ProductItem.module.css';

import {useDispatch} from 'react-redux'

import {cartActions} from '../../store/cart-slice'
// this is how the item object look like, have to use this as payload
// item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  //const newPayload = {title,price,description}

  const dispatch = useDispatch()
  //const cart = useSelector(state=>state.items)

  const addToCartHandler = () => {
    // // we need to check whether already have the object
    
    // // loop through the stored

    // const result = cart.filter(cartItem=>cartItem.title === newPayload.title)
    
    // console.log(result)


    // // if there are no items with such name, we dispatch
    // if(result.length() === 0){
    //   dispatch(cartActions.addToCartHandler(),newPayload)
    //   console.log(cart)
    // }

    dispatch(cartActions.addToCart({
      id,
      title,
      price
    }))

  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
