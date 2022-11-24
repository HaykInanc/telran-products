import React from 'react'
import s from './style.module.sass';
import { useDispatch } from 'react-redux';

export default function Product({id, name, price}) {

  const dispatch = useDispatch();

  const addToBasket = ()=>{
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: {id, name, price}
    })
  }

  return (
    <div className={s.product}>
        <p>{name}</p>
        <p>{price}</p>
        <button onClick={addToBasket}>Добавть в корзину</button>
    </div>
  )
}
