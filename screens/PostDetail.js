import React from "react";
import {
  FlatList,
  Button,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import { useCallback, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getComments } from "../store/actions/comments"
import Comment from "../components/Comment";


function PostDetail(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [onRefreshing, setOnRefreshing] = useState(false);
  const [error, setError] = useState(false);
  const {id, title, body} = props.route.params;
  const comments = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();

  const loadComments = useCallback(async () => {
    setError(null);
    setOnRefreshing(true);
    try {
      await dispatch(getComments(id));
    } catch (err) {
      setError(err.message);
    }
    setOnRefreshing(false);
  }, [dispatch]);


  useEffect(() => {
    setIsLoading(true);
    loadComments().then(() => setIsLoading(false));
  }, [dispatch, loadComments]);

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>An error occurred!</Text>
        <Button
          title="Try again"
          onPress={loadComments}
          color={'#ADD8E6'}
        />
      </View>
    );
  }

  if (isLoading) {
    return (
      <>
      <BodyComment title={title} body={body}/>
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={"#ADD8E6"} />
      </View>
      </>
    );
  }

  if (!isLoading && comments.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No products found!</Text>
      </View>
    );
  }
  
  return (
    <>
        <BodyComment title={title} body={body}/>
        <View style={styles.titleComments}>
          <Text style={{fontSize: 16, fontWeight: "bold"}}>comments</Text>
        </View>
        <FlatList 
            onRefresh={loadComments}
            refreshing={onRefreshing}
            data={comments}
            keyExtractor={(item) => item.id}
            renderItem={(item)=>{
              return(
                <Comment item={item.item}/>
              ) 
            }}
        />
    </>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container:{
    margin: 10
  },
  post:{
    margin: 10,
    gap: 10
  },
  titleComments: {
    margin: 10
  }
});

export default PostDetail;


const BodyComment = ({title, body})=>{
  return(
    <View style={styles.post}>
        <View><Text style={{fontSize: 16, fontWeight: "bold"}}>Title:</Text><Text>{title}</Text></View>
        <View><Text style={{fontSize: 16, fontWeight: "bold"}}>Body:</Text><Text>{body}</Text></View>
    </View>
  )
}
