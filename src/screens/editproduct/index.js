import { View, Text, Pressable, Image, TextInput, ScrollView, Modal } from 'react-native'
import { Button } from '@rneui/themed'
import Icon from 'react-native-vector-icons/Ionicons';
import React, { useEffect, useState } from 'react'
import Camera from '../../assets/img/camera.png'
import { REACT_APP_BE, URL_DEPLOY } from '@env'

import styles from './styles';
import { editProduct } from '../../modules/axios';
import { useSelector } from 'react-redux';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
const EditProduct = ({ navigation, route }) => {
    const { token } = useSelector(state => state.auth);
    const [product, setProduct] = useState([])
    const [statusModal, setStatusModal] = useState(false)
    const [photo, setPhoto] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    // const [body, setBody] = useState({
    //     name: '',
    //     price: '',
    //     description: '',
    //     delivery_info: '',
    //     stock: '5',
    //     category_id: ''
    // })

    const getProduct = async () => {
        try {
            const id = route.params.id
            const response = await axios.get(`${URL_DEPLOY}/product/${id}`)
            console.log(response.data.data.data[0])
            setProduct(response.data.data.data[0])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProduct()
    }, [route.params.id])

    const handlerOpenCamera = () => {
        const option = {
            mediaType: 'photo',
            quality: 1
        }
        launchCamera(option, (res) => {
            if (res.didCancel) {
                console.log('User Cancelled Image Picker');
            } else if (res.errorCode) {
                console.log(res.errorMessage);
            } else {
                const data = {
                    name: res.assets[0].fileName,
                    size: res.assets[0].fileSize,
                    type: res.assets[0].type,
                    uri: res.assets[0].uri,
                }
                setPhoto(data)
                console.log(data);
                setStatusModal(false)
            }
        })
    }

    const handlerOpenGallery = () => {
        const option = {
            mediaType: 'photo',
            quality: 1
        }
        launchImageLibrary(option, (res) => {
            if (res.didCancel) {
                console.log('User Cancelled Image Picker');
            } else if (res.errorCode) {
                console.log(res.errorMessage);
            } else {
                const data = {
                    name: res.assets[0].fileName,
                    size: res.assets[0].fileSize,
                    type: res.assets[0].type,
                    uri: res.assets[0].uri,
                }
                setPhoto(data)
                // console.log(data);
                setStatusModal(false)
            }
        })
    }

    const handlerEditProduct = async () => {
        try {
            setIsLoading(true)
            const id = route.params.id
            let newBody = new FormData()
            newBody.append('photo', photo);
            newBody.append('name', product.name);
            newBody.append('price', product.price);
            newBody.append('description', product.description);
            newBody.append('delivery_info', product.delivery_info);
            newBody.append('stock', product.stock);
            newBody.append('category_id', product.category_id);
            const config = { headers: { Authorization: `Bearer ${token}`, "content-type": "multipart/form-data" } }
            const response = await editProduct(id, newBody, config)
            console.log(response);
            setTimeout(() => {
                setIsLoading(false)
                navigation.replace('home')
            }, 200);
        }
        catch (error) {
            setIsLoading(false)
            console.log(error);
        }
    }
    return (
        <>
            <ScrollView>
                <View style={styles.wrapperHeader}>
                    <Icon name='chevron-back-outline' size={30} onPress={() => { navigation.navigate('home') }} />
                    <Text style={styles.header}>Edit Products</Text>
                </View>
                <View style={styles.containerNew}>
                    <View style={styles.Photo}>
                        <View style={styles.photoWrapper}>
                            <Image
                                source={photo ? { uri: photo.uri } : { uri: product.photo } ? { uri: product.photo } : Camera}
                                style={styles.imageProduct}
                            />
                            <Pressable
                                style={styles.btnUpload}>
                                <Icon name='pencil-outline' size={25} color={'#FFFF'} onPress={() => setStatusModal(true)} />
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={styles.labelStyle}>Name</Text>
                        <TextInput
                            placeholder="Input the product name"
                            placeholderTextColor="#9F9F9F"
                            value={product.name}
                            onChange={(e) => setProduct({ ...product, name: e.nativeEvent.text })}
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={styles.labelStyle}>Price</Text>
                        <TextInput
                            placeholder="Input the product price"
                            placeholderTextColor="#9F9F9F"
                            value={product.price && product.price.toString()}
                            onChange={(e) => setProduct({ ...product, price: e.nativeEvent.text })}
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={styles.labelStyle}>Delivery info</Text>
                        <TextInput
                            placeholder="Type delivery information"
                            placeholderTextColor="#9F9F9F"
                            value={product.delivery_info}
                            onChange={(e) => setProduct({ ...product, delivery_info: e.nativeEvent.number })}
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={styles.labelStyle}>Description</Text>
                        <TextInput
                            placeholder="Describe your product"
                            placeholderTextColor="#9F9F9F"
                            value={product.description}
                            onChange={(e) => setProduct({ ...product, description: e.nativeEvent.text })}
                        />
                    </View>
                    <View style={styles.buttonBox}>
                        <Text style={styles.labelStyle}>Select Category</Text>
                        <View style={styles.btnWrapperCategory}>
                            <Button
                                onPress={() => setProduct({ ...product, category_id: '1' })}
                                buttonStyle={
                                    // styles.btnActive
                                    product.category_id === '1' ? styles.btnActive : styles.btnCategory
                                }>
                                COFFEE
                            </Button>
                            <Button
                                onPress={() => setProduct({ ...product, category_id: '3' })}
                                buttonStyle={
                                    // styles.btnActive
                                    product.category_id === '3' ? styles.btnActive : styles.btnCategory
                                }>
                                SNACK
                            </Button>
                            <Button
                                onPress={() => setProduct({ ...product, category_id: '4' })}
                                buttonStyle={
                                    // styles.btnActive
                                    product.category_id === '4' ? styles.btnActive : styles.btnCategory
                                }>
                                FOOD
                            </Button>
                            <Button
                                onPress={() => setProduct({ ...product, category_id: '2' })}
                                buttonStyle={
                                    // styles.btnActive
                                    product.category_id === '2' ? styles.btnActive : styles.btnCategory
                                }>
                                NON COFFEE
                            </Button>
                        </View>
                    </View>
                    <Button
                        loading={isLoading}
                        onPress={handlerEditProduct}
                        buttonStyle={styles.btnSave}
                        color="#6A4029">
                        Save Product
                    </Button>
                </View>
            </ScrollView>
            <Modal
                visible={statusModal}
                transparent={true}
                animationType='fade'
            >
                <View style={styles.viewModal}>
                    <View style={styles.wrapperInModal}>
                        <Pressable style={styles.chooseBtn} onPress={handlerOpenCamera}>
                            <Icon name='camera-outline' size={30} />
                        </Pressable>
                        <Pressable style={styles.chooseBtn} onPress={handlerOpenGallery}>
                            <Icon name='image-outline' size={30} />
                        </Pressable>
                    </View>
                    <Button
                        buttonStyle={styles.btnCancel}
                        onPress={() => setStatusModal(false)}
                    >Cancel</Button>
                </View>
            </Modal>
        </>
    )
}

export default EditProduct