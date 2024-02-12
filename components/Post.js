import React, { PureComponent } from 'react';
import { View, Text, Button, Pressable, StyleSheet } from "react-native"

class Post extends PureComponent {
    
    render() { 
        const {item, onClick, onDelete, onUpdate} = this.props
        return(
            <Pressable onPress={onClick} style={styles.container}>
                <Text>Id: {item.id}</Text>
                <Text>UserId: {item.userId}</Text>
                <Text>Title: {item.title}</Text>
                <Text>Body: {item.body}</Text>
                <Text>WordCount: {item.wordCount}</Text>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={onDelete} style={styles.delete}><Text style={styles.textDelete}>Delete</Text></Pressable>
                    <Pressable onPress={onUpdate} style={styles.update}><Text style={styles.textUpdate}>Update</Text></Pressable>
                </View>
            </Pressable>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        margin: 10,
        backgroundColor: "#1BAE77",
        borderRadius: 5,
        padding: 5
    },
    buttonContainer:{
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20
    },
    delete: {
        backgroundColor: 'red',
        color: 'black', 
        height: 20,
        margin: 10,
        width: 100
    },
    update:{
        backgroundColor: 'white',
        color: 'black',
        height: 20,
        margin: 10,
        width: 100
    },
    textDelete:{
        textAlign: 'center'
    },
    textUpdate:{
        textAlign: 'center'
    }
})

export default Post