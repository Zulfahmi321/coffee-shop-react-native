import { View, Text, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import ProdDef from '../../assets/img/coldbrew.png'
import { Button } from '@rneui/themed'
import { REACT_APP_BE, URL_DEPLOY } from '@env'

import Toast from 'react-native-toast-message'
import styles from './styles'
import axios from 'axios';
import { currencyFormatter } from '../../helpers/formatter';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAction } from '../../redux/actionCreators/cart';

const ProductDetail = ({ navigation, route }) => {
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [size, setSize] = useState('')
    const { user } = useSelector(state => state.user)
    const [errMsg, setErrMsg] = useState('')

    const dispatch = useDispatch()

    const getProductDetail = async () => {
        try {
            setIsLoading(true)
            const id = route.params.id
            const response = await axios.get(`${URL_DEPLOY}/product/${id}`)
            // console.log(response.data.data.data[0])
            setProduct(response.data.data.data[0])
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getProductDetail()
    }, [route.params.id])

    const handlerAddToCart = () => {
        if (!size) {
            return showToastError()
        }
        const newProduct = { ...product, size }
        dispatch(addProductAction(newProduct))
        navigation.replace('cart')
        // console.log(newProduct);
    }

    const showToastError = () => {
        Toast.show({
            type: 'error',
            text1: 'Choose Size'
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrapperHeader}>
                <Icon name='chevron-back-outline' size={30} onPress={() => { navigation.navigate('home') }} />
                <Icon name='cart-outline' size={30} onPress={() => { navigation.navigate('cart') }} />
            </View>
            <View style={styles.containerDetail}>
                <Image source={product.photo ? { uri: product.photo } : ProdDef} style={styles.image} />
                <Text style={styles.titleName}>{product.name}</Text>
                <Text style={styles.price}>
                    {currencyFormatter.format(product.price)}
                </Text>
            </View>
            <View style={styles.description}>
                <Text style={styles.titleDesc}>Descrition</Text>
                <Text style={styles.bodyDesc}>{product.description}</Text>
            </View>
            <View style={styles.wrapBtnSize}>
                <Button
                    onPress={() => setSize('Regular')}
                    size="sm"
                    title="R"
                    color="#FFBA33"
                    buttonStyle={size === 'Regular' ? styles.btnActive : styles.btnSize}
                />
                <Button
                    onPress={() => setSize('Large')}
                    size="sm"
                    title="L"
                    color="#FFBA33"
                    buttonStyle={size === 'Large' ? styles.btnActive : styles.btnSize}
                />
                <Button
                    onPress={() => setSize('Extra Large')}
                    size="sm"
                    title="XL"
                    color="#FFBA33"
                    buttonStyle={
                        size === 'Extra Large' ? styles.btnActive : styles.btnSize
                    }
                />
            </View>
            <View style={styles.deliveryInfo}>
                {user.roles !== 'admin' ?
                    <Button buttonStyle={styles.buttonCreate} loading={isLoading} onPress={handlerAddToCart}>
                        <Text style={styles.buttonTextCreate}>Add To Cart</Text>
                    </Button>
                    :
                    <Button buttonStyle={styles.buttonCreate} onPress={() => navigation.navigate('editproduct', { id: route.params.id })}>
                        <Text style={styles.buttonTextCreate}>Edit Product</Text>
                    </Button>
                }
            </View>
            <Toast />
        </View>
    )
}

export default ProductDetail