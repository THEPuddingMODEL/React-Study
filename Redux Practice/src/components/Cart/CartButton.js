import classes from './CartButton.module.css';

import { useDispatch, useSelector} from 'react-redux';
import{uiActions} from '../../store/ui-slice'

const CartButton = (props) => {

  const dispatch = useDispatch()

  const cartQuantity = useSelector(state=>state.cart.totalQuantity)

  const toggleHandler = () => {
    // .toggle() from redux are action creator methods
    // need to executre toggle as method, need to execute 
    // return action object
    // action object is then dispatched
    dispatch(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
