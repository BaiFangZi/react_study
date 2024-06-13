import {
  createSlice
} from '@reduxjs/toolkit';
export const appSlice = createSlice({
  name: 'app',
  initialState: {
    count: 0,
    name: '',
    user: { id: 1, name: 'John', age: 30 },
  },
  reducers: {
    setUser(state, action) {
      console.log('action',action);
      state.user = action.payload
    },
    setName(state, action) {
      // console.log('action长这样',action);
      state.name = action.payload
    },
    increment(state) {
      state.count += 1
    },
    decrement(state) {
      state.count -= 1
    },
    incrementByAmount(state, action) {
      state.count += action.payload;
    }
  }
})
export const {
  increment,
  decrement,
  incrementByAmount,
  setName,
  setUser
} = appSlice.actions;

export default appSlice.reducer;