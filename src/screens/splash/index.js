import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { StackActions } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { logoutAction } from '../../redux/actionCreators/auth'
import styles from './styles'
import Coffee from '../../assets/icons/coffee.png'
const Splash = ({ navigation }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(logoutAction())
        setTimeout(() => {
            navigation.dispatch(StackActions.replace('landing'))
        }, 2000);
    }, [])
    return (
        <View style={styles.container}>
            <Image source={Coffee} />
            <Text style={styles.brand}>COFFEE SHOP</Text>
        </View >
    )
}

export default Splash