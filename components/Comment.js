import React, { PureComponent } from 'react';
import { View, Text, Button, Pressable, StyleSheet } from "react-native"

class Comment extends PureComponent {
    
    render() { 
        const {item} = this.props
        return(
            <View style={styles.container}>
                <View style={styles.idsContainer}>
                    <View style={styles.idPostContainer}>
                        <Text style={styles.idPost}>Post Id: </Text>
                        <Text style={styles.idPostRes}>{item.postId}</Text>
                    </View>
                    <View style={styles.idContainer}>
                        <Text style={styles.id}>Id: </Text>
                        <Text style={styles.idRes}>{item.id}</Text>
                    </View>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>Name: </Text>
                    <Text style={styles.nameRes}>{item.name}</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.body}>Body: </Text>
                    <Text style={styles.bodyRes}>{item.body}</Text>
                </View>
                <View style={styles.emailContainer}>
                    <Text style={styles.email}>Email: </Text>
                    <Text style={styles.emailRes}>{item.email}</Text>
                </View>
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
    },
    idsContainer: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    idPostContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 10,
        alignItems: 'center'
    },
    idPost:{
        fontSize: 16,
        fontWeight: '400'
    },
    idPostRes: {
        fontSize: 14
    },
    idContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    id:{
        fontSize: 16,
        fontWeight: '400'
    },
    idRes:{

    },
    nameContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    name:{
        fontSize: 16,
        fontWeight: '400'
    },
    nameRes: {

    },
    bodyContainer: {
    },
    body:{
        fontSize: 16,
        fontWeight: '400'
    },
    bodyRes:{

    },
    emailContainer: {
        display: 'flex',
        flexDirection: 'row'
    }, 
    email: {
        fontSize: 16,
        fontWeight: '400'
    },
    emailRes: {

    }
})

export default Comment