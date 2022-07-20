import { View, Text, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import bg2 from '../../assets/img/bg2.png'

import styles from './styles'

const Welcome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={bg2} style={styles.imgBg}>
                <View style={styles.bgClrWel}>
                    <View>
                        <Text style={styles.title}>Welcome!</Text>
                        <Text style={styles.body}>Get a cup of coffee for free every sunday morning</Text>
                    </View>
                    <View style={styles.btnContainer}>
                        <Pressable style={styles.buttonCreate}>
                            <Text style={styles.buttonTextCreate} onPress={() => navigation.navigate('registrasi')}>Create New Account</Text>
                        </Pressable>
                        <Pressable style={styles.button}>
                            <Text style={styles.buttonText} onPress={() => navigation.navigate('login')}>Login</Text>
                        </Pressable>
                    </View>
                </View>
            </ImageBackground >
        </View>
    )
}

export default Welcome