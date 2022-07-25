import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { useSelector, useDispatch } from 'react-redux';
import ProdDef from '../../assets/img/coldbrew.png'
import styles from './styles'
import { currencyFormatter } from '../../helpers/formatter'
// import axios from 'axios';
import { addTransaction } from '../../modules/axios';
import { sendLocalNotification } from '../../helpers/notification';

const Payments = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [payment, setPayment] = useState('')
    const { cart } = useSelector(state => state.cart)
    const { token } = useSelector(state => state.auth)
    const { user } = useSelector(state => state.user)

    const paymentHandler = async () => {
        try {
            setIsLoading(true)
            const body = {
                product_id: cart.id,
                quantity: cart.quantity,
                size_id: cart.id,
                total_price: cart.subtotal,
                payment_id: payment,
                delivery_id: cart.delivery,
                promo_id: cart.promo,
                user_id: user.id
            }
            const config = { headers: { Authorization: `Bearer ${token}` } }
            const response = await addTransaction(body, config)
            console.log(response)
            setIsLoading(false)
            setTimeout(() => {
                navigation.navigate('history')
                sendLocalNotification('PAYMENT SUCCESS', 'Anda Berhasil Melakukan Pembelian Produk ')
            }, 500);
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Products</Text>
            </View>
            <View style={styles.card}>
                <Image source={cart.picture ? { uri: cart.picture } : ProdDef} style={styles.img} />
                <View style={styles.productInfo}>
                    <Text style={styles.item}>{cart.name ? cart.name : 'Hazelnut Latte'}</Text>
                    <Text style={styles.item}>{`x${cart.quantity}`}</Text>
                    <Text style={styles.item}>{cart.size === 'R' ? 'Regular' : cart.size === 'L' ? 'Large' : 'Extra Large'}</Text>
                </View>
                <Text style={styles.price}>{currencyFormatter.format(cart.subtotal)}</Text>
            </View>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Payment method</Text>
            </View>
            <View style={styles.methodCard}>
                <Text style={styles.delivery} onPress={() => setPayment('card')}>
                    <Icon name={payment === 'card' ? 'checkmark-circle' : 'checkmark-circle-outline'} size={15} color={'#6A4029'} /> Card
                </Text>
                <View style={styles.border}></View>
                <Text style={styles.delivery} onPress={() => setPayment('bank')}>
                    <Icon name={payment === 'bank' ? 'checkmark-circle' : 'checkmark-circle-outline'} size={15} color={'#6A4029'} /> Bank account
                </Text>
                <View style={styles.border}></View>
                <Text style={styles.delivery} onPress={() => setPayment('cod')}>
                    <Icon name={payment === 'cod' ? 'checkmark-circle' : 'checkmark-circle-outline'} size={15} color={'#6A4029'} /> Cash on delivery
                </Text>
            </View>
            <View style={styles.totalContainer}>
                <Text style={styles.subtitle}>Total</Text>
                <Text style={styles.subtitle}>{currencyFormatter.format(cart.subtotal)}</Text>
            </View>
            <Pressable style={styles.paymentBtn} onPress={paymentHandler}>
                <Text style={styles.paymentTxt}>Proceed payment</Text>
            </Pressable>
        </View>
    )
}

export default Payments