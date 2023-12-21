import {createStore} from 'redux'

import {createSlice} from '@reduxjs/toolkit'

const initialState = {counter:0, showCounter:true}

// preparing a slice of global state
createSlice({
    
    name:'counter',
    initialState, 
    // all the reducer this slide needs
    reducers:{

        // automatically recieve latest state
        // dont need actions, atumatically called based on action
        // dont need if statements
        increment(state){
            // when using redux toolkit, it will automatically clone a state
            // and return
            // it is immutable code, automatically handled by redux toolkit
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        increase(state, action){
            state.counter = state.counter + action.amount
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter
        },


    }
})

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

