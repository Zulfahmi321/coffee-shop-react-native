import { View, Text, ImageBackground, TextInput, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import bg5 from '../../assets/img/vektor1.png'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'
import { forgotPassword, resetPassword } from '../../modules/axios'
const Forgot = () => {
    const [showPass, setShowPass] = useState(false)
    const [showPassCon, setShowPassCon] = useState(false)
    const [email, setEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [screen, setScreen] = useState('forgot')
    const [errMsg, setErrMsg] = useState('')
    const [confirmCode, setConfirmCode] = useState('')

    const handlerForgotPassword = async () => {
        try {
            const response = await forgotPassword(email)
            setScreen('reset')
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    }

    const handlerResetPassword = async () => {
        try {
            if (newPassword !== confPassword) {
                setErrMsg("Password & Password Confirm does not match")
                // console.log(errMsg);
                showToastError()
                return
            }
            let body = { email, newPassword, confirmCode }
            const response = await resetPassword(body)
            console.log(response);
            showToastSuccess()
        }
        catch (error) {
            console.log(error);
        }
    }
    const showToastError = () => {
        Toast.show({
            type: 'error',
            text1: errMsg
        })
    }
    const showToastSuccess = () => {
        Toast.show({
            type: 'success',
            text1: 'Success Reset Password'
        })
    }
    return (
        <>
            {screen === 'forgot' ?
                < View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Don't Worry!</Text>
                        <Text style={styles.subtitle}>We've just sent a link to your email to request a new password</Text>
                        <Image source={bg5} />
                    </View>
                    <View style={styles.botContainer}>
                        <TextInput style={styles.input} placeholder='Enter your email address' placeholderTextColor='#cccccc'
                            keyboardType='email-address'
                            onChange={(e) => setEmail(e.nativeEvent.text)}
                        />
                        <Text style={styles.resend}>Haven’t received any link?</Text>
                        <Pressable style={styles.button} onPress={handlerForgotPassword}>
                            <Text style={styles.buttonText}>Send Link</Text>
                        </Pressable>
                    </View>
                </View>
                :
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Reset Your Password</Text>
                        <Text style={styles.subtitle}>Please Input Your Password And New Password</Text>
                        <Image source={bg5} />
                    </View>
                    <View style={styles.botContainer}>
                        <TextInput style={styles.input} placeholder='Enter your email address' placeholderTextColor='#cccccc'
                            keyboardType='email-address'
                            onChange={(e) => setEmail(e.nativeEvent.text)}
                        />
                        <View style={styles.wrapperPassword}>
                            <TextInput style={styles.input} placeholder='Enter your password' placeholderTextColor='#cccccc' secureTextEntry={showPass ? false : true}
                                onChange={(e) => setNewPassword(e.nativeEvent.text)}
                            />
                            <Icon name={showPass ? 'eye-outline' : 'eye-off-outline'} style={styles.eye} onPress={() => setShowPass(!showPass)} />
                        </View>
                        <View style={styles.wrapperPassword}>
                            <TextInput style={styles.input} placeholder='Enter your new password' placeholderTextColor='#cccccc' secureTextEntry={showPassCon ? false : true}
                                onChange={(e) => setConfPassword(e.nativeEvent.text)}
                            />
                            <Icon name={showPassCon ? 'eye-outline' : 'eye-off-outline'} style={styles.eye} onPress={() => setShowPassCon(!showPassCon)} />
                        </View>
                        <TextInput style={styles.input} placeholder='Enter your confirm code' placeholderTextColor='#cccccc'
                            onChange={(e) => setConfirmCode(e.nativeEvent.text)}
                        />
                        <Pressable style={styles.button} onPress={handlerResetPassword}>
                            <Text style={styles.buttonText}>Reset Password</Text>
                        </Pressable>
                    </View>
                </View>
            }
        </>
    )
}

export default Forgot