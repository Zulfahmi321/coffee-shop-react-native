import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { StackActions } from '@react-navigation/native'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(StackActions.replace('landing'))
        }, 3000);
    }, [])
    return (
        <View>
            <Text>Splash</Text>
        </View>
    )
}

export default Splash