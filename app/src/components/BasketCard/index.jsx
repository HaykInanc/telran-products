import React from 'react'
import s from './style.module.sass'
import {useDispatch} from 'react-redux';

export default function BasketCard({id, name, price, count}) {
  const dispatch = useDispatch();

  const increment = ()=>dispatch(
    {
      type: 'INCREMENT_COUNT', 
      payload: id
    }
  )

  const decrement = ()=>dispatch(
    {
      type: 'DECREMENT_COUNT', 
      payload: id
    }
  )

  return (
    <div className={s.card}>
        <p>{name}</p>
        <p>{price}</p>
        <p>{count}</p>
        <div>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
    </div>
  )
}
