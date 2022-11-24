import React from 'react'
import s from './style.module.sass'

export default function BasketCard({id, name, price, count}) {
  return (
    <div className={s.card}>
        <p>{name}</p>
        <p>{price}</p>
        <p>{count}</p>
        <div>
          <button>+</button>
          <button>-</button>
        </div>
    </div>
  )
}
