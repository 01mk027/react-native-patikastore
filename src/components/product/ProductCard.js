import React from "react";
import { View, Image, Text } from "react-native";
import styles from './ProductCard.style';


const ProductCard = ({product}) => {
    console.log(product);
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: product.imgURL}} />
            <View style={styles.innerContainer}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.inStock}>{product.inStock ? "" : "STOKTA YOK"}</Text>
            </View>
        </View>
    );
}


export default ProductCard;