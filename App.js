import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import  PostReducer  from "./store/reducers/posts";
import CommentReducer from "./store/reducers/comments";
import NavigationContainer from "./navigation/navigationContainer";

const store = configureStore({
  reducer: {
    posts: PostReducer,
    comments: CommentReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export default function App() {
  return (
    <Provider store={store}>
       <NavigationContainer />
    </Provider>
  );
}

const styles = StyleSheet.create({});