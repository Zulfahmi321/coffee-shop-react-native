import { View, Text, Image, Pressable, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProdDef from '../../assets/img/coldbrew.png'

import styles from './styles'
import { showTransaction } from '../../modules/axios'
import { useSelector } from 'react-redux'
import { currencyFormatter } from '../../helpers/formatter'
import Icon from 'react-native-vector-icons/Ionicons';

const History = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [transaction, setTransaction] = useState([])
    const [isDelete, setIsDelete] = useState(false)
    const { token } = useSelector(state => state.auth)

    const handlerShowTransaction = async () => {
        try {
            setIsLoading(true)
            const response = await showTransaction(token)
            console.log(response.data.data);
            setTransaction(response.data.data)
            setTimeout(() => {
                setIsLoading(false)
            }, 500);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        handlerShowTransaction()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Order History</Text>
            <Icon name='home-outline' size={30} onPress={() => navigation.replace('home')} />
            {isLoading ?
                <ActivityIndicator size={'large'} />
                :
                <FlatList data={transaction} renderItem={({ item }) => (
                    <Pressable style={isDelete ? styles.cardSelect : styles.card} onLongPress={() => setIsDelete(!isDelete)}>
                        <Image source={item.photo ? { uri: item.photo } : ProdDef} style={styles.img} />
                        <View style={styles.info}>
                            <Text style={styles.name}>{item.product}</Text>
                            <Text style={styles.price}>{currencyFormatter.format(item.price)}</Text>
                            <Text style={styles.status}>{item.delivery}</Text>
                        </View>
                    </Pressable>
                )} />
            }
        </View>
    )
}

export default History