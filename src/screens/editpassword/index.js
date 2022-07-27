import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from '@rneui/themed'

import styles from './styles'
import { changePassword } from '../../modules/axios'
import { useSelector } from 'react-redux'
const EditPassword = ({ navigation }) => {
    const [showPass, setShowPass] = useState(false)
    const [showPassCon, setShowPassCon] = useState(false)
    const [newPassword, setNewPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [errMsg, setErrMsg] = useState('')

    const { token } = useSelector(state => state.auth);

    const handlerChangePassword = async () => {
        try {
            setIsLoading(true)
            if (newPassword !== confPassword) {
                setErrMsg("Password & Password Confirm does not match")
                console.log(errMsg);
                return
            }
            let body = { newPassword }
            const config = { headers: { Authorization: `Bearer ${token}` } }
            const response = await changePassword(body, config)
            console.log(response);
            setTimeout(() => {
                setIsLoading(false)
                navigation.navigate('home')
            }, 200);
        }
        catch (error) {
            setIsLoading(false)
            console.log(error);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titleScreen}>Edit Your Password</Text>
            <Text>New Password :</Text>
            <View style={styles.containerInput}>
                <TextInput
                    secureTextEntry={showPass ? false : true}
                    placeholderTextColor="black"
                    placeholder="Input your new password"
                    style={styles.inputPass}
                    onChange={(e) => setNewPassword(e.nativeEvent.text)}
                />
                <Icon name={showPass ? 'eye-outline' : 'eye-off-outline'} style={styles.eye} onPress={() => setShowPass(!showPass)} />
            </View>
            <Text>Confirm Password :</Text>
            <View style={styles.containerInput}>
                <TextInput
                    secureTextEntry={showPassCon ? false : true}
                    placeholder="Input your confirm password"
                    placeholderTextColor="black"
                    style={styles.inputPass}
                    onChange={(e) => setConfPassword(e.nativeEvent.text)}
                />
                <Icon name={showPassCon ? 'eye-outline' : 'eye-off-outline'} style={styles.eye} onPress={() => setShowPassCon(!showPassCon)} />
            </View>
            <Button loading={isLoading} buttonStyle={styles.btnSave} onPress={handlerChangePassword}>
                Save Changes
            </Button>
        </View>
    )
}

export default EditPassword