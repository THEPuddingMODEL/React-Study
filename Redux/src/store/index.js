import {createStore} from 'redux'

const initialState = {counter:0, showCounter:true}

const reducerCounter = (state= initialState,action) => {

    if(action.type === "increment"){
        // redux would not merge your changes with existing state.
        // so therefore even we didnt update showCounter, we still need to update it
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }

    // alway return a brand new object

    if(action.type === "increase"){
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }

    if(action.type === "decrement"){
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    if(action.type === "toggle"){
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }

    return state

}

const store = createStore(reducerCounter)

// do not subsribe
// now connect to the React project

// only one redux store, provide the store once 
export default store

