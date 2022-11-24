import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BasketCard from '../BasketCard';
export default function Basket() {
  const basket = useSelector(state => state.basket);
  return (
    <div>
        <p>Корзина</p>

        <div>
            {
                basket.map(product => <BasketCard key={product.id} {...product}/>)
            }
        </div>
    </div>
  )
}
