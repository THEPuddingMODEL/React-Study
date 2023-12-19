import { createContext, useState , useReducer} from "react";

// for better auto completion
const CartContext = createContext({
    items:[],
    addItem: (item)=>{}, 
    removeITem:(id)=>{}
})

// update state managed by the context
function cartReducer(state,action){

    if(action.type === 'ADD_ITEM'){
        // update state to add a meal item

        // push wilol mutate the exsting array, this might
        // not be ideal, because something is still changed.
        // state.items.push(action.item)

        const existingCartIndex = state.items.findIndex((item)=>item.id === action.item.id)

        const updatedItems = [...state.items]

        if(existingCartIndex===-1){
            // updatedItems.push(action.item)
            // we have to accomodate to the way we are updating our state
            // for exmaple, our chosen way to handle the increase in quantity
            // therefore cannot just push an item

            updatedItems.push({...action.item, quantity:1})
        } else {
        
            const existingItem = state.items[existingCartIndex]
            // already exists becausee returned a value greater than -1
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            }

            updatedItems[existingCartIndex] = updatedItem

        }

        // we had the ...state, because we do not want alter any things
        // it is the best to return something new than altering on exsitng object
        return {...state, items:updatedItems}
    }

    if(action.type === 'REMOVE_ITEM'){
        // update state to add a meal item


        // unlike add item, we do not need the whole item because we simply removing.
        // const existingCartIndex = state.items.findIndex((item)=>item.id === action.item.id)

        const existingCartIndex = state.items.findIndex((item)=>item.id === action.id)

        // dont have to check whether existe, can only remove if not exist
        // cehck if it is greater than 1.

        const itemQuantity = state.items[existingCartIndex].quantity

        const updatedItems = [...state.items]

        if(itemQuantity > 1){
            const updatedItem = {
                ...state.items[existingCartIndex],
                quantity: state.items[existingCartIndex].quantity - 1
            }

            updatedItems[existingCartIndex] = updatedItem


        } else {
            
            //updatedItems = [...state.items].filter((item)=>item.id!== existingCartIndex)

            updatedItems.splice(existingCartIndex,1)
        }

        return {...state, items:updatedItems}

    }

    return state
}


export function CartContextProvider({children}){

    // second parameter is initial value of the state
    const [cart, dispatchCartaction] = useReducer(cartReducer,{items:[]})

    // through action to reducer
    function addItem(item){
        // must neeed the item because we have a item in the aaction
        dispatchCartaction({type:'ADD_ITEM', item:item})
    }

    function removeItem(id){
        dispatchCartaction({type:'REMOVE_ITEM', id:id})
    }

        // when ever the cart is changed, all interested party of  'cartContext' will be notified
        const cartContext = {
            items: cart.items,
            addItem,
            removeItem
    
        }

        console.log('added')

    return <CartContext.Provider value={cartContext}>
        {children}
    </CartContext.Provider>
}


export default CartContext