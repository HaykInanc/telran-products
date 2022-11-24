
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
    }else if (action.type === 'INCREMENT_COUNT') {
        state.find(({id}) => id === action.payload).count++
        return [...state]
    }else if (action.type === 'DECREMENT_COUNT') {
        const target = state.find(({id}) => id === action.payload);
        if (target.count === 1){
            state = state.filter(({id}) => id !== action.payload);
        }else{
            state.find(({id}) => id === action.payload).count--;
        }
        return [...state]
    }else if (action.type === 'CLEAR_BASKET'){
        return default_state
    }else {
        return state
    }
} 