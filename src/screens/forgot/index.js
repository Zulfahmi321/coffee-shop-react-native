import { View, Text, ImageBackground, TextInput, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import bg5 from '../../assets/img/vektor1.png'

import styles from './styles'
const Forgot = () => {
    const [email, setEmail] = useState('')
    console.log(email);
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Don't Worry!</Text>
                <Text style={styles.subtitle}>We've just sent a link to your email to request a new password</Text>
                <Image source={bg5} />
            </View>
            <View style={styles.btnContainer}>
                <TextInput style={styles.input} placeholder='Enter your email address' placeholderTextColor='#cccccc'
                    keyboardType='email-address'
                    onChange={(e) => setEmail(e.nativeEvent.text)}
                />
                <Text style={styles.resend}>Haven’t received any link?</Text>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Send Link</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Forgot