import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui', 
  initialState: { cartIsVisible: false },
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    }
  }
})

export const uiActions = uiSlice.actions;