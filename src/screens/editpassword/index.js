import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Button } from '@rneui/themed'

import styles from './styles'
import { changePassword } from '../../modules/axios'
import { useSelector } from 'react-redux'
const EditPassword = ({ navigation }) => {
    const [newPassword, setNewPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const { token } = useSelector(state => state.auth);

    const handlerChangePassword = async () => {
        try {
            if (newPassword !== confPassword) {
                setErrMsg("Password & Password Confirm does not match")
                console.log(errMsg);
                return
            }
            let body = { newPassword }
            const config = { headers: { Authorization: `Bearer ${token}` } }
            const response = await changePassword(body, config)
            console.log(response);
            navigation.navigate('home')
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titleScreen}>Edit Your Password</Text>
            <Text>New Password :</Text>
            <View style={styles.containerInput}>
                <TextInput
                    secureTextEntry={true}
                    placeholderTextColor="black"
                    placeholder="Input your new password"
                    style={styles.inputPass}
                    onChange={(e) => setNewPassword(e.nativeEvent.text)}
                />
            </View>
            <Text>Confirm Password :</Text>
            <View style={styles.containerInput}>
                <TextInput
                    secureTextEntry={true}
                    placeholder="Input your confirm password"
                    placeholderTextColor="black"
                    style={styles.inputPass}
                    onChange={(e) => setConfPassword(e.nativeEvent.text)}
                />
            </View>
            <Button buttonStyle={styles.btnSave} onPress={handlerChangePassword}>
                Save Changes
            </Button>
        </View>
    )
}

export default EditPassword