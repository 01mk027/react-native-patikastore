import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{flex:1},
    image: {
        height: Dimensions.get('window').height / 4,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    innerContainer:{padding: 5},
    title:{fontWeight: 'bold', fontSize: 18},
    price:{},
    inStock: {fontWeight: 'bold', fontSize: 18, color: 'red'},
    
})