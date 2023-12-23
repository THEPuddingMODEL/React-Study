import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux'

import { counterActions } from '../store';

// selector allows us to select part of state
// if is a class bsased, connect function can be used. wrapper around class component

const Counter = () => {

  // useDisatch gives a function dispatch we can use
  const dispatch = useDispatch()
  const counter = useSelector(state=>state.counter)

  // useSelector will make sure it is the latest data, and will do stae update 
  // component will be evaluate if value change
  const showCounter = useSelector(state=>state.showCounter)

  // recieve latest counter automatically. New state will trigger state update 
  // if this component would be removed from the DOM, subsription will be canclled

  const incremtnHandler = ()=>{

    //dispatch({type:'increment'})

    dispatch(counterActions.increment())

  }

  const increaseHandler = ()=>{

    //dispatch({type:'increase', amount: 5})

    // {unique identifer, pauload}
    dispatch(counterActions.increase(5))

  }

  const decremtnHandler = ()=>{
    //dispatch({type:'decrement'})

    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    //dispatch({type:"toggle"})

    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incremtnHandler}>
          Increment
        </button>

        <button onClick={increaseHandler}>
          Increase by 5
        </button>

        <button onClick={decremtnHandler}>
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// how to use redux with class based component
// class Counter extends Component {

//   incremtnHandler{

//     dispatch({type:'increment'})

//   }

//   decremtnHandler {
//     dispatch({type:'decrement'})
//   }

//   toggleCounterHandler {}

//   render(){

//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{counter}</div>
//         <div>
//           <button onClick={this.incremtnHandler}>
//             Increment
//           </button>
  
//           <button onClick={this.decremtnHandler}>
//             Decrement
//           </button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );

//   }
// }

// // connect is a higher order component, execution will return a new function
// // this function then takes counter
// export default connect()(Counter);

export default Counter
