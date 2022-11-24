
const default_state = [];

const checkProduct = (state, product) => {
    const productInState = state.find(({id}) => id === product.id);
    if (productInState){
        productInState.count++;
        return [...state]
    }else{
        return [...state, {...product, count: 1}]
    }
}

export const basketReducer = (state=default_state, action) =>{
    if (action.type === 'ADD_TO_BASKET'){
        return checkProduct(state, action.payload);
    }else {
        return state
    }
} 

// необходимо получая новый товар в корзину проверять, есть ли он уже
// если он есть, увеличить ему count на 1
// если его нет, то добавить свойство count со значением 1