import { View, Text, ImageBackground, TextInput, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import bg3 from '../../assets/img/bg3.png'
import google from '../../assets/icons/google-icon.png'
import { Button } from '@rneui/base';

import styles from './styles'
import { doRegister } from '../../modules/axios'


const Registrasi = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [input, setInput] = useState({
        email: '',
        password: '',
        mobile_number: ''
    })
    const registerHandler = async () => {
        try {
            setIsLoading(true)
            const response = await doRegister(input)
            console.log(response)
            setIsLoading(false)
            setTimeout(() => {
                navigation.navigate('login')
            }, 200);
        }
        catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }
    return (
        <ImageBackground source={bg3} style={styles.imageBg}>
            <View style={styles.imageBgClr}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Sign Up</Text>
                </View>
                <View style={styles.btnContainer}>
                    <TextInput style={styles.input} placeholder='Enter your email address' placeholderTextColor='#cccccc'
                        keyboardType='email-address'
                        onChange={(e) => setInput({ ...input, email: e.nativeEvent.text })}
                    />
                    <TextInput style={styles.input} placeholder='Enter your password' placeholderTextColor='#cccccc' secureTextEntry={true}
                        onChange={(e) => setInput({ ...input, password: e.nativeEvent.text })}
                    />
                    <TextInput style={styles.input} placeholder='Enter your phone number' placeholderTextColor='#cccccc' keyboardType='numeric'
                        onChange={(e) => setInput({ ...input, mobile_number: e.nativeEvent.text })}
                    />
                    <Button buttonStyle={styles.button} loading={isLoading} onPress={registerHandler}>
                        <Text style={styles.buttonText}>Create Account</Text>
                    </Button>
                    <Pressable style={styles.gbutton}>
                        <Image source={google} style={styles.google} />
                        <Text style={styles.gbuttonText}>Create with Google</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Registrasi