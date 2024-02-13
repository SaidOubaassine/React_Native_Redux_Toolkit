import React, { PureComponent } from 'react';
import { View, Text, Button, Pressable, StyleSheet, TouchableOpacity } from "react-native"

class Post extends PureComponent {
    constructor(props){
        super(props);
        this.state = {value: false}
    }

    PressOut = () => {
        this.setState({value: !this.state.value})
    }
    TouchStart = () => {
        this.setState({value: !this.state.value})
    }
    
    render() { 
        const {item, onClick, onDelete, onUpdate} = this.props;
        return(
            <TouchableOpacity onPress={this.props.onClick} style={styles.container}>
                <View style={styles.idsContainer}>
                    <View style={styles.idContainer}>
                        <Text style={styles.id}>Id:</Text>
                        <Text style={styles.idResult}>{item.id}</Text>
                    </View>
                    <View style={styles.idUserContainer}>
                        <Text style={styles.idUser}>UserId:</Text>
                        <Text>{item.userId}</Text>
                    </View>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Title:</Text>
                    <Text style={styles.titleResult}>{item.title}</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.body}>Body:</Text>
                    <Text>{item.body}</Text>
                </View>
                <View>
                    <Text style={styles.wordCount}>WordCount:</Text>
                    <Text>{item.wordCount}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable 
                        onPress={onDelete} 
                        style={styles.delete}>
                            <Text style={styles.textDelete}>Delete</Text>
                    </Pressable>
                    <Pressable 
                        onPress={onUpdate} 
                        style={this.state.value ? styles.updatePress : styles.update}
                        onTouchStart={this.TouchStart}
                        onPressOut={this.PressOut}
                        >
                        <Text style={this.state.value ?  {color: 'white', textAlign: 'center'} : styles.textUpdate} >Update</Text>
                    </Pressable>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: "#1BAE77",
        borderRadius: 5,
        padding: 10
    },
    buttonContainer:{
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    delete: {
        backgroundColor: 'red',
        color: 'black', 
        height: 20,
        marginVertical: 10,
        width: 100,
        borderRadius: 3
    },
    update:{
        backgroundColor: 'white',
        height: 20,
        marginVertical: 10,
        width: 100,
        borderRadius: 3
    },
    updatePress: {
        backgroundColor: 'yellow',
        height: 20,
        marginVertical: 10,
        width: 100,
        borderRadius: 0
    },
    textDelete:{
        textAlign: 'center'
    },
    textUpdate:{
        textAlign: 'center'
    }, 
    idsContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    titleContainer:{
        marginVertical: 5,
    },
    bodyContainer: {
        marginVertical: 5
    },
    title: {
        fontSize: 16,
        fontWeight: '500'
    },
    titleResult: {
        fontSize: 14,
        fontWeight: '400'
    },
    body: {
        fontSize: 16,
        fontWeight: '500'
    }, 
    id: {
        fontSize: 16,
        fontWeight: '500',
        marginRight: 5
    },
    idResult: {
        fontSize: 14,
        fontWeight: '400'
    },
    idUser:{
        fontSize: 16,
        fontWeight: '500',
        marginRight: 5
    },
    wordCount: {
        fontSize: 16,
        fontWeight: '500'
    },
    idContainer:{
        display: "flex",
        flexDirection: "row",
        marginRight: 20,
        alignItems: 'center'
    },
    idUserContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center'
    }
})

export default Post