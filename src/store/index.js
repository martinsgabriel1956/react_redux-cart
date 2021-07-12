import { configureStore } from '@reduxjs/toolkit';

import { uiSlice } from './ui';
import { cartSlice } from './cart';

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer, 
    cart: cartSlice.reducer
  },
});