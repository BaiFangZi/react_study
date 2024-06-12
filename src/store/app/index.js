import {
  createSlice
} from '@reduxjs/toolkit';
export const appSlice = createSlice({
  name: 'app',
  initialState: {
    count: 0,
    name: '',
    obj: {
      a: 1
    }
  },
  reducers: {
    setObjA(state, action) {
      state.obj.a = action.payload
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
  setObjA
} = appSlice.actions;

export default appSlice.reducer;