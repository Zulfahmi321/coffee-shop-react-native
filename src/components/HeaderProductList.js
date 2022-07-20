import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderProductList = () => {
    // const [menu, setMenu] = useState('all')

    return (
        <>
            <View style={styles.searchContainer}>
                <Icon name='search' size={20} color='#9F9F9F' />
                <TextInput style={styles.searchInput} placeholder={'Search'} />
            </View>
            <ScrollView horizontal={true} style={styles.scrollViewH} showsHorizontalScrollIndicator={false}>
                <Text style={menu === 'all' ? styles.categoryTextAct : styles.categoryText}
                    onPress={() => setMenu('all')}
                >All</Text>
                <Text style={menu === 'coffee' ? styles.categoryTextAct : styles.categoryText}
                    onPress={() => setMenu('coffee')}
                >Coffee</Text>
                <Text style={menu === 'noncoffee' ? styles.categoryTextAct : styles.categoryText}
                    onPress={() => setMenu('noncoffee')}
                >Non Coffee</Text>
                <Text style={menu === 'food' ? styles.categoryTextAct : styles.categoryText}
                    onPress={() => setMenu('food')}
                >Food</Text>
            </ScrollView>
        </>
    )
}

export default HeaderProductList


const styles = StyleSheet.create({
    searchContainer: {
        display: 'flex',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EFEEEE',
        marginHorizontal: '20%',
        borderRadius: 100,
        paddingHorizontal: 15,
    },
    searchInput: {
        paddingVertical: 5,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        width: '100%',
        textAlignVertical: 'auto'
    },
    categoryContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: '5%',
        justifyContent: 'space-between',
        width: 800,
    },
    scrollViewH: {
        marginHorizontal: '5%',
        marginVertical: 10
    },
    categoryText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 17,
        color: '#9A9A9D',
        marginRight: 20
    },
    categoryTextAct: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 17,
        color: '#6A4029',
        marginRight: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#6A4029'
    },
})