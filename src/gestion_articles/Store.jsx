import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './ArticleSLice';

const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});

export default store;
