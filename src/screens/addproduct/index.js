import { View, Text, Pressable, Image, TextInput, ScrollView, Modal } from 'react-native'
import { Button } from '@rneui/themed'
import Icon from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react'
import Camera from '../../assets/img/camera.png'
import Toast from 'react-native-toast-message'
import styles from './styles';
import { addProduct } from '../../modules/axios';
import { useSelector } from 'react-redux';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
const AddProduct = ({ navigation }) => {
    const { token } = useSelector(state => state.auth);
    const [statusModal, setStatusModal] = useState(false)
    const [photo, setPhoto] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [body, setBody] = useState({
        name: '',
        price: '',
        description: '',
        delivery_info: '',
        stock: '5',
        category_id: ''
    })

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

    const handlerAddProduct = async () => {
        try {
            setIsLoading(true)
            let newBody = new FormData()
            newBody.append('photo', photo);
            newBody.append('name', body.name);
            newBody.append('price', body.price);
            newBody.append('description', body.description);
            newBody.append('delivery_info', body.delivery_info);
            newBody.append('stock', body.stock);
            newBody.append('category_id', body.category_id);
            const config = { headers: { Authorization: `Bearer ${token}`, "content-type": "multipart/form-data" } }
            const response = await addProduct(newBody, config)
            console.log(response);
            showToastSuccess()
            setTimeout(() => {
                setIsLoading(false)
                navigation.replace('home')
            }, 200);
        }
        catch (error) {
            setIsLoading(false)
            showToastError()
            console.log(error);
        }
    }
    const showToastSuccess = () => {
        Toast.show({
            type: 'success',
            text1: 'Add Product Success'
        })
    }
    const showToastError = () => {
        Toast.show({
            type: 'error',
            text1: 'Add Product Failed'
        })
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
                                source={photo ? { uri: photo.uri } : Camera}
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
                            onChange={(e) => setBody({ ...body, name: e.nativeEvent.text })}
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={styles.labelStyle}>Price</Text>
                        <TextInput
                            placeholder="Input the product price"
                            placeholderTextColor="#9F9F9F"
                            onChange={(e) => setBody({ ...body, price: e.nativeEvent.text })}
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={styles.labelStyle}>Delivery info</Text>
                        <TextInput
                            placeholder="Type delivery information"
                            placeholderTextColor="#9F9F9F"
                            onChange={(e) => setBody({ ...body, delivery_info: e.nativeEvent.text })}
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={styles.labelStyle}>Description</Text>
                        <TextInput
                            placeholder="Describe your product"
                            placeholderTextColor="#9F9F9F"
                            onChange={(e) => setBody({ ...body, description: e.nativeEvent.text })}
                        />
                    </View>
                    <View style={styles.buttonBox}>
                        <Text style={styles.labelStyle}>Select Category</Text>
                        <View style={styles.btnWrapperCategory}>
                            <Button
                                onPress={() => setBody({ ...body, category_id: 1 })}
                                buttonStyle={
                                    // styles.btnActive
                                    body.category_id === 1 ? styles.btnActive : styles.btnCategory
                                }>
                                COFFEE
                            </Button>
                            <Button
                                onPress={() => setBody({ ...body, category_id: 3 })}
                                buttonStyle={
                                    // styles.btnActive
                                    body.category_id == 3 ? styles.btnActive : styles.btnCategory
                                }>
                                SNACK
                            </Button>
                            <Button
                                onPress={() => setBody({ ...body, category_id: 4 })}
                                buttonStyle={
                                    // styles.btnActive
                                    body.category_id == 4 ? styles.btnActive : styles.btnCategory
                                }>
                                FOOD
                            </Button>
                            <Button
                                onPress={() => setBody({ ...body, category_id: 2 })}
                                buttonStyle={
                                    // styles.btnActive
                                    body.category_id == 2 ? styles.btnActive : styles.btnCategory
                                }>
                                NON COFFEE
                            </Button>
                        </View>
                    </View>
                    <Button
                        loading={isLoading}
                        onPress={handlerAddProduct}
                        buttonStyle={styles.btnSave}
                        color="#6A4029">
                        Save Product
                    </Button>
                </View>
                <Toast />
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

export default AddProduct