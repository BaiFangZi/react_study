import { configureStore } from '@reduxjs/toolkit';
import app from './app'

export default configureStore({
  reducer: {
   app //暴露出来的模块
  },
});