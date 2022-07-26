import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { currencyFormatter } from '../../helpers/formatter';
import ProdDef from '../../assets/img/coldbrew.png'

import styles from './styles'
import { addProductAction } from '../../redux/actionCreators/cart';

import { useSelector, useDispatch } from 'react-redux'
const Cart = ({ navigation }) => {
    const [quantity, setQuantity] = useState(1)
    const [promo, setPromo] = useState('')

    const { cart } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const itemTotal = cart.price * quantity
    const delivery = 0
    const tax = 10000
    const subtotal = itemTotal + delivery + tax

    const checkoutHandler = () => {
        const newProduct = { ...cart, subtotal, promo, quantity }
        dispatch(addProductAction(newProduct))
        navigation.replace('deliverymethods')
    }

    return (
        <View style={styles.container}>
            <View style={styles.cartContainer}>
                <View style={styles.cardProduct}>
                    <Image source={ProdDef} style={styles.img} />
                    <Text style={styles.price}>{currencyFormatter.format(cart.price)}</Text>
                </View>
                <View style={styles.rightCart}>
                    <Text style={styles.name}>{cart.name}</Text>
                    <View style={styles.quantityContainer}>
                        <Text style={styles.counter} onPress={() => setQuantity(quantity === 1 ? quantity : quantity - 1)}>-</Text>
                        <Text style={styles.quantity}>{quantity}</Text>
                        <Text style={styles.counter} onPress={() => setQuantity(quantity + 1)}>+</Text>
                    </View>
                </View>
            </View>
            <Pressable style={styles.couponBtn}>
                <Text style={styles.couponText}>
                    Apply Delivery Coupons
                </Text>
            </Pressable>
            <View style={styles.infoContainer}>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLeft}>Item Total</Text>
                    <Text style={styles.infoRight}>{currencyFormatter.format(itemTotal)}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLeft}>Delivery Charge</Text>
                    <Text style={styles.infoRight}>{currencyFormatter.format(delivery)}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLeft}>Tax</Text>
                    <Text style={styles.infoRight}>{currencyFormatter.format(tax)}</Text>
                </View>
            </View>
            <View style={styles.totalRow}>
                <Text style={styles.total}>Total :</Text>
                <Text style={styles.total}>{currencyFormatter.format(subtotal)}</Text>
            </View>
            <Pressable style={styles.checkoutBtn} onPress={checkoutHandler}>
                <Text style={styles.checkoutText}>
                    CHECKOUT
                </Text>
            </Pressable>
        </View>
    )
}

export default Cart