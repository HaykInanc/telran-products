import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Basket from '../Basket';
import Product from '../Product';

export default function Test() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  
  const submit = event=>{
    event.preventDefault();
    const {name, price} = event.target;
    dispatch({
        type: 'ADD_PRODUCT',
        payload: {name: name.value, price: +price.value}
    })
  }

  return (
    <div>
        <form onSubmit={submit}>
            <input type="text" name='name' placeholder='name'/>
            <input type="number" name='price' placeholder='price'/>
            <button>Добавить</button>
        </form>
        <div>
          {
            products.map(product => <Product key={product.id} {...product}/>)
          }
        </div>
        <Basket />
    </div>
  )
}
