import { View, Text, Image, Pressable, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

import styles from './styles'
import { getAllPromo } from '../../modules/axios'
import { useSelector } from 'react-redux'
import { currencyFormatter } from '../../helpers/formatter'

const Promo = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [promo, setPromo] = useState([])
    const { token } = useSelector(state => state.auth)

    const handlerGetAllPromo = async () => {
        try {
            setIsLoading(true)
            const response = await getAllPromo(token)
            console.log(response.data.data);
            setPromo(response.data.data)
            setTimeout(() => {
                setIsLoading(false)
            }, 500);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        handlerGetAllPromo()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>All Promo</Text>
            {isLoading ?
                <ActivityIndicator size={'large'} />
                :
                <FlatList data={promo} renderItem={({ item }) => (
                    <View style={styles.info}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.name}>{item.discount}%</Text>
                        <Text style={styles.price}>{currencyFormatter.format(item.normal_price)}</Text>
                        <Text style={styles.status}>{item.description}</Text>
                    </View>
                )} />
            }
        </View>
    )
}
export default Promo