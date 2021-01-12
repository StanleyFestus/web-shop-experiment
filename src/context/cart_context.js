import React, { useContext, useEffect, useReducer} from 'react';
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  TOGGLE_CART_ITEM_AMOUNT
} from '../actions.js';
import reducer from '../reducers/cart_reducer';

const initialState = {
  cart: '',
  total_items: 0,
  total_amount: 0,
  shipping_fee: 27,
}

const CartContext = React.createContext();

export const CartProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // add item to cart
  const addToCart = (id, color, amount, product) => {
    dispatch({
      type: ADD_TO_CART, 
      payload: {id, color, amount, product}})
    }
  // remove item from cart
  const removeItem = (id) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id
    })
  }
  // clear cart
  const clearCart = () => {
    dispatch({
      type: CLEAR_CART
    })
  }
    const editAmount = (id, value) => {
      dispatch({
        type: TOGGLE_CART_ITEM_AMOUNT,
        payload: {}
      })
    }

    return(
      <CartContext.Provider value={{
        ...state, addToCart, removeItem, clearCart, editAmount}}>
          {children}
      </CartContext.Provider>
    )
  }

  export const useCartContext = () =>{
    return useContext(CartContext)
  }