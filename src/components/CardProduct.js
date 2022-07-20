import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import Hazelnut from '../assets/img/hazelnut.png'
import React from 'react'

const CardProduct = ({ id, name, price, photo, category, navigation }) => {
    return (
        <View style={styles.containerCard}>
            <Pressable style={styles.card} onPress={() => navigation.navigate('productdetail', { id })}>
                <Image source={photo ? { uri: photo } : Hazelnut} style={styles.img} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{name ? name : 'Poduct Name'}</Text>
                    <Text style={styles.price}>{category ? category : 'Poduct Category'}</Text>
                    <Text style={styles.price}>{price ? price : 'Product Price'}</Text>
                </View>
            </Pressable>
        </View>
    )
}
export default CardProduct

const styles = StyleSheet.create({
    containerCard: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    card: {
        width: 150,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        alignItems: 'center',
        margin: 5,
    },
    img: {
        width: 130,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 15
    },
    textContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    name: {
        fontFamily: 'Poppins-Bold',
        fontSize: 22,
        textAlign: 'center',
        color: '#000000'
    },
    price: {
        fontFamily: 'Poppins-Bold',
        fontSize: 17,
        textAlign: 'center',
        color: '#6A4029'
    },
})

