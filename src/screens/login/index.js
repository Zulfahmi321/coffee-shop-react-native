import { View, Text, ImageBackground, Pressable, Image, TextInput } from 'react-native'
import bg4 from '../../assets/img/bg4.png'
import google from '../../assets/icons/google-icon.png'
import React, { useEffect, useState } from 'react'
import { loginAction } from '../../redux/actionCreators/auth'
import Toast from 'react-native-toast-message'

import styles from './styles'
import { Button } from '@rneui/themed'
import { useDispatch, useSelector } from 'react-redux'

const Login = ({ navigation }) => {
    // const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { isLoading, errMsg, msg, isSuccess } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handlerLogin = () => {
        const body = { email, password };
        dispatch(loginAction(body))
    }
    const showToastSuccess = () => {
        Toast.show({
            type: 'success',
            text1: msg
        })
    }
    const showToastError = () => {
        Toast.show({
            type: 'error',
            text1: errMsg
        })
    }
    useEffect(() => {
        if (isSuccess === true) {
            showToastSuccess()
            navigation.navigate('home')
        }
        if (isSuccess === false) {
            showToastError()
        }
    }, [isSuccess])
    return (
        <ImageBackground source={bg4} style={styles.imageBg}>
            <View style={styles.imageBgClr}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Login</Text>
                </View>
                <View style={styles.btmContainer}>
                    <TextInput style={styles.input} placeholder='Enter your email address' placeholderTextColor='#cccccc'
                        onChange={(e) => { setEmail(e.nativeEvent.text) }}
                    />
                    <TextInput style={styles.input} placeholder='Enter your password' placeholderTextColor='#cccccc' secureTextEntry={true}
                        onChange={(e) => { setPassword(e.nativeEvent.text) }}
                    />
                    <Pressable onPress={() => navigation.navigate('forgot')}>
                        <Text style={styles.forgot}>Forgot password?</Text>
                    </Pressable>
                    <Button buttonStyle={styles.loginBtn} loading={isLoading} onPress={handlerLogin}>
                        <Text style={styles.loginText}>Login</Text>
                    </Button>
                    <View style={styles.info}>
                        <View style={styles.border}></View>
                        <Text style={styles.infoText}>or login in with</Text>
                        <View style={styles.border}></View>
                    </View>
                    <Pressable style={styles.gbutton}>
                        <Image source={google} style={styles.google} />
                        <Text style={styles.gbuttonText}>Create with Google</Text>
                    </Pressable>
                </View>
                <Toast />
            </View>
        </ImageBackground >
    )
}

export default Login