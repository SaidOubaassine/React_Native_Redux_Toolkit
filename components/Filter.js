import { View, TextInput, StyleSheet } from "react-native";

const Filter = (props)=>{
    return(
        <View style={styles.filter}>
            <TextInput 
            placeholder="Search" 
            onChangeText={props.onSearch} 
            style={styles.search}
            />
            <TextInput 
            inputMode="numeric" 
            maxLength={3} 
            onChangeText={props.onPagination} 
            style={styles.pagination}
            />
      </View>
    )
}

const styles = StyleSheet.create({
    search:{
        height: 30,
        width: 200,
        backgroundColor: "white",
        borderWidth: 0,
        margin: 10,
        paddingLeft: 10,
        borderRadius: 5
      },
      pagination:{
        height: 30,
        width: 80,
        backgroundColor: "white",
        borderWidth: 0,
        margin: 10,
        borderRadius: 5,
        paddingLeft: 10,
      },
      filter:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: 'gray'
      }
})

export default Filter;