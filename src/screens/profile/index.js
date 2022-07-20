import { View, Text, ScrollView, Image, Pressable, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

import ProfDef from '../../assets/img/profdef.png'
import styles from './styles';
import { getProfile, showTransaction } from '../../modules/axios';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
const Profile = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [profile, setProfile] = useState({});
    const [history, setHistory] = useState([]);
    const { token } = useSelector(state => state.auth);
    const { user } = useSelector(state => state.user)

    const handlerGetProfile = async () => {
        try {
            setIsLoading(true)
            const response = await getProfile(token)
            // console.log(response.data.data.data[0])
            setProfile(response.data.data.data[0])
            setTimeout(() => {
                setIsLoading(false)
            }, 500);
        }
        catch (error) {
            console.log(error);
        }
    };
    const handlerGetHistory = async () => {
        try {
            setIsLoading(true)
            const response = await showTransaction(token)
            // console.log(response.data.data);
            setHistory(response.data.data);
            setTimeout(() => {
                setIsLoading(false)
            }, 500);
        }
        catch (error) {
            console.log(error);
            setIsLoading(false)
        }
    };
    useEffect(() => {
        handlerGetProfile()
        handlerGetHistory()
    }, [user]);
    return (
        <ScrollView style={styles.container}>
            <View style={styles.containerProfile}>
                <View style={styles.containerPhoto}>
                    <Image
                        source={profile.photo ? { uri: profile.photo } : ProfDef}
                        style={styles.imageProfile}
                    />
                    <Pressable style={styles.btnEdit} onPress={() => navigation.navigate('editprofile')}>
                        <Icon name="settings-outline" size={20} color="white" />
                    </Pressable>
                </View>
                <Text style={styles.fullname}>
                    {profile.username ?
                        profile.username
                        : 'Fullname'}
                </Text>
                <Text style={styles.Description}>
                    {profile.email}
                    {'\n'}
                    {profile.mobile_number}
                    {'\n'}
                    {profile.address ? profile.address : 'Your Address'}
                </Text>
            </View>
            <View style={styles.containerOrder}>
                <View style={styles.orderText}>
                    <Text style={styles.order}>Order History</Text>
                    <Text style={styles.more}>See more</Text>
                </View>
                <View >
                    {isLoading ?
                        <ActivityIndicator size={'large'} />
                        :
                        <FlatList horizontal={true} data={history} renderItem={({ item }) => (<Image source={{ uri: item.photo }} style={styles.imageOrder} />)} />
                    }
                </View>
            </View>
            <View style={styles.containerEdit}>
                <Pressable style={styles.btnEditProfile}>
                    <Text style={styles.btnText}>Edit Password</Text>
                    <Icon name="chevron-forward-outline" size={20} color="#6A4029" onPress={() => navigation.navigate('editpassword')} />
                </Pressable>
                <Pressable style={styles.btnEditProfile}>
                    <Text style={styles.btnText}>FAQ</Text>
                    <Icon name="chevron-forward-outline" size={20} color="#6A4029" />
                </Pressable>
                <Pressable style={styles.btnEditProfile}>
                    <Text style={styles.btnText}>Help</Text>
                    <Icon name="chevron-forward-outline" size={20} color="#6A4029" />
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default Profile