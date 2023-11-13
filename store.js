import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import resturantSlice from './slices/resturantSlice'

export const store = configureStore({ 
    reducer: {
        cart: cartSlice,
        resturant: resturantSlice
    } })