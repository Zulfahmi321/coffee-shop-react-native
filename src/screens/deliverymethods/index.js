import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import ProdDef from '../../assets/img/coldbrew.png'
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles'
import { currencyFormatter } from '../../helpers/formatter';
import { addProductAction } from '../../redux/actionCreators/cart';
const DeliveryMethods = ({ navigation }) => {
    const [delivery, setDelivery] = useState('')
    const { cart } = useSelector(state => state.cart)
    const { user } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const proceedHandler = () => {
        const newProduct = { ...cart, delivery }
        dispatch(addProductAction(newProduct))
        navigation.replace('payments')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Delivery</Text>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Address details</Text>
                <Text style={styles.change}>change</Text>
            </View>
            <View style={styles.addressCard}>
                <Text style={styles.address}>{user.username}</Text>
                <View style={styles.border}></View>
                <Text style={styles.phone}>{user.address}</Text>
                <View style={styles.border}></View>
                <Text style={styles.phone}>{user.mobile_number}</Text>
            </View>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Delivery methods</Text>
            </View>
            <View style={styles.addressCard}>
                <Text style={styles.delivery} onPress={() => setDelivery('delivery')}>
                    <Icon name={delivery === 'delivery' ? 'checkmark-circle' : 'checkmark-circle-outline'} size={15} color={'#6A4029'} /> Door delivery
                </Text>
                <View style={styles.border}></View>
                <Text style={styles.delivery} onPress={() => setDelivery('pickup')}>
                    <Icon name={delivery === 'pickup' ? 'checkmark-circle' : 'checkmark-circle-outline'} size={15} color={'#6A4029'} /> Pick up at store
                </Text>
                <View style={styles.border}></View>
                <Text style={styles.delivery} onPress={() => setDelivery('dinein')}>
                    <Icon name={delivery === 'dinein' ? 'checkmark-circle' : 'checkmark-circle-outline'} size={15} color={'#6A4029'} /> Dine in
                </Text>
            </View>
            <View style={styles.totalCosntainer}>
                <Text style={styles.subtitle}>Total</Text>
                <Text style={styles.subtitle}>{currencyFormatter.format(cart.subtotal)}</Text>
            </View>
            <Pressable style={styles.paymentBtn} onPress={proceedHandler}>
                <Text style={styles.paymentTxt}>Proceed to payment</Text>
            </Pressable>
        </View>
    )
}

export default DeliveryMethods