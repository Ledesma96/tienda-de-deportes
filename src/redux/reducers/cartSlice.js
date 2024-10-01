import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const cart = state
            const existingItem = cart.find(item => item.id === action.payload.id)
            if(existingItem) {
                existingItem.quantity += action.payload.quantity
            } else {
                state.push({ ...action.payload, quantity: action.payload.quantity });
            }
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.id!== action.payload)
        },
        clearCart: (state) => {
            return []
        },
        updateQuantity: (state, action) => {
            return state.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + action.payload.quantity} : item)
        }
    }
})

export const selectCartTotal = (state) => {
    return state.cart.reduce((total, item) => total + item.quantity * item.price, 0);
};

export const selectCartTotalItems = (state) => {
    return state.cart.length > 0 ? state.cart.length : 0
}

export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartReducer.actions;

export default cartReducer.reducer;