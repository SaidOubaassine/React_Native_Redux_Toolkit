import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  TextInput,
  Text,
  ActivityIndicator,
  Button,
  Pressable,
  SafeAreaView,
  Platform,
  TouchableWithoutFeedback,
  ScrollView
} from "react-native";
import { useCallback, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../store/actions/posts";
import { deletePost } from "../store/reducers/posts";
import Post from "../components/Post";
import Filter from "../components/Filter";

function Posts(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [onRefreshing, setOnRefreshing] = useState(false);
  const [error, setError] = useState(false);
  const [search, onChangeText] = useState('');
  const [number, onChangeNumber] = useState(100);
  let posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  const loadPosts = useCallback(async () => {
    setError(null);
    setOnRefreshing(true);
    try {
      await dispatch(getPosts());
    } catch (err) {
      setError(err.message);
    }
    setOnRefreshing(false);
  }, [dispatch]);
  
  useEffect(() => {
    setIsLoading(true);
    loadPosts().then(() => setIsLoading(false));
  }, [dispatch, loadPosts]);


  if (error) {
    return (
      <View style={styles.centered}>
        <Text>An error occurred!</Text>
        <Button
          title="Try again"
          onPress={loadPosts}
          color={'#ADD8E6'}
        />
      </View>
    );
  }


  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={"#ADD8E6"} />
      </View>
    );
  }

  if (!isLoading && posts.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No products found!</Text>
      </View>
    );
  }


  
  return (
      <>
        <Filter
          onSearch={(text)=> {onChangeText(text)}}
          onPagination={(text)=> { if(text !== "" && text <= 100 && text > 0) onChangeNumber(text) }} 
        />
        <FlatList
          onRefresh={loadPosts}
          refreshing={onRefreshing}
          style={styles.list}
          data={posts.filter((post)=> (post.id <= number && post.title.includes(search) ))}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <View key={itemData.item.id}>
              <Post 
                key={itemData.item.userId}
                item={itemData.item} 
                onClick={(event)=>{
                  props.navigation.navigate("Detail", {
                    id: itemData.item.id,
                    title: itemData.item.title,
                    body: itemData.item.body
                })}}
                onDelete={async()=>{
                  await dispatch(deletePost(itemData.item.id))
                }}
        />
            </View>
          )}
        />
      </>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default Posts;
