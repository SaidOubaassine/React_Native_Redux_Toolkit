import React, { PureComponent } from 'react';
import { View, Text, Button, Pressable, StyleSheet } from "react-native"

class Comment extends PureComponent {
    
    render() { 
        const {item} = this.props
        return(
            <View style={styles.container}>
                <Text>Post Id: {item.postId}</Text>
                <Text>Id: {item.id}</Text>
                <Text>Name: {item.name}</Text>
                <Text>Body: {item.body}</Text>
                <Text>Email: {item.email}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        margin: 15,
        backgroundColor: "gray",
        borderRadius: 5,
        shadowColor: 'yellow',
        shadowOpacity: 0.9,
        shadowRadius: 5,
        padding: 5
    }
})

export default Comment