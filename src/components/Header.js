import { View, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ navigation, handlerDrawer }) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '5%', backgroundColor: '#F2F2F2' }}>
            <Icon name='menu-outline' size={30} style={{ flex: 3 }} color='#000000'
                onPress={handlerDrawer}
            />
            <View style={{ display: 'flex', flexDirection: 'row', flex: 2, justifyContent: 'space-between' }}>
                <Icon name='chatbubble-outline' size={30} color='#9F9F9F' />
                <Icon name='search' size={30} color='#9F9F9F' onPress={() => navigation.navigate('productlist')} />
                <Icon name='time-outline' size={30} color='#9F9F9F' onPress={() => navigation.navigate('history')} />
            </View>
        </View>
    )
}

export default Header