
const default_state = [];

export const productReducer = (state=default_state, action) =>{
    if (action.type === 'ADD_PRODUCT'){
        return [...state, {
            id: Date.now(),
            ...action.payload
        }] 
    }else if(action.type === 'LOAD_PRODUCTS'){
        return [...state, ...action.payload]
    }else {
        return state
    }
} 