import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BasketCard from '../BasketCard';
export default function Basket() {
  const basket = useSelector(state => state.basket);
  const dispatch = useDispatch();

  const clear_basket = ()=>dispatch({type: 'CLEAR_BASKET'});

  return (
    <>
    {
      basket.length === 0
      ? ''
      :<div>
        <p>Корзина</p>

        <div>
            {
                basket.map(product => <BasketCard key={product.id} {...product}/>)
            }
        </div>
        <p>
          Итого: <span>{basket.reduce((prev, {price, count})=> prev + price * count, 0)}</span>
        </p>
        <button onClick={clear_basket}>Очистить корзину</button>
      </div>
    }
    
    </>
  )
}

// добавить кнопку очистки корзины
