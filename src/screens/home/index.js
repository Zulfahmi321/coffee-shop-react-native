import { View, Text, Image, Pressable, FlatList, ActivityIndicator, Modal } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import ProfDef from '../../assets/img/profdef.png'
import Icon from 'react-native-vector-icons/Ionicons';

import { Button } from '@rneui/themed'
import styles from './styles';
import Header from '../../components/Header';
import CardProduct from '../../components/CardProduct';
import { getProduct } from '../../modules/axios';
import { currencyFormatter } from '../../helpers/formatter';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDataAction } from '../../redux/actionCreators/userdata';
import { logoutAction } from '../../redux/actionCreators/auth';
import { color } from '@rneui/base';

const Home = ({ navigation, ...props }) => {
    const [isLoading, setIsLoading] = useState(false)
    const drawerRef = useRef(null);
    const [product, setProduct] = useState([])
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.auth)
    const { user } = useSelector(state => state.user)
    const [statusModal, setStatusModal] = useState(false)
    const [statusModalLg, setStatusModalLg] = useState(false)

    const handlerDrawer = () => drawerRef.current.openDrawer()

    const handlerToAddProduct = () => {
        setStatusModal(false)
        navigation.navigate('addproduct')
    }

    const handlerToAddPromo = () => {
        setStatusModal(false)
        navigation.navigate('addpromo')
    }

    const handlerGetProduct = async () => {
        try {
            setIsLoading(true)
            let response = await getProduct()
            // console.log(response.data.data);
            setProduct(response.data.data);
            setTimeout(() => {
                setIsLoading(false)
            }, 200);
        }
        catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        handlerGetProduct()
        dispatch(getUserDataAction(token))
    }, [token])
    const renderDrawer = () => {
        return (
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <Image source={user.photo ? { uri: user.photo } : ProfDef} style={styles.profpict} />
                    <Text style={styles.username}>{user.username ? user.username : "Your Name"}</Text>
                    <Text style={styles.email}>{user.email}</Text>
                </View>
                <View style={styles.menuContainer}>
                    <Pressable style={styles.menuList} onPress={() => navigation.navigate('profile')}>
                        <Icon name="person-outline" size={35} />
                        <Text style={styles.menuText}>Edit Profile</Text>
                    </Pressable>
                    <View style={styles.menuList}>
                        <Icon name='cart-outline' size={35} />
                        <Text style={styles.menuText}>Orders</Text>
                    </View>
                    <Pressable style={styles.menuList} onPress={() => navigation.navigate('promo')}>
                        <Icon name='pricetags-outline' size={35} />
                        <Text style={styles.menuText}>All Promo</Text>
                    </Pressable>
                    <View style={styles.menuList}>
                        <Icon name="settings-outline" size={35}></Icon>
                        <Text style={styles.menuText}>Privacy policy</Text>
                    </View>
                    <View style={styles.menuList}>
                        <Icon name="shield-outline" size={35}></Icon>
                        <Text style={styles.menuText}>Security</Text>
                    </View>
                </View>
                <Pressable style={styles.menuList} onPress={() => setStatusModalLg(true)} >
                    <Icon name="log-out-outline" size={35}></Icon>
                    <Text style={styles.menuText}>Logout</Text>
                </Pressable>
            </View >
        );
    };
    return (
        <DrawerLayout
            ref={drawerRef}
            drawerWidth={300}
            drawerPosition={DrawerLayout.positions.Left}
            drawerType="slide"
            drawerBackgroundColor="#ddd"
            renderNavigationView={renderDrawer}
        >
            <View style={styles.containerHome}>
                <Header handlerDrawer={handlerDrawer} navigation={navigation} />
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>A good coffee is a good day</Text>
                    {user.roles !== 'admin' ?
                        <View style={styles.wrapperNavTitle}>
                            <Pressable onPress={() => navigation.navigate('favorite')}>
                                <Text style={styles.favorite}>Favorite Products</Text>
                            </Pressable>
                            <Pressable onPress={() => navigation.navigate('productlist')}>
                                <Text style={styles.favorite}>Show More</Text>
                            </Pressable>
                        </View>
                        :
                        <View style={styles.wrapperNavTitle}>
                            <Pressable onPress={() => navigation.navigate('favorite')}>
                                <Text style={styles.favorite}>Favorite Products</Text>
                            </Pressable>
                            <Pressable onPress={() => navigation.navigate('productlist')}>
                                <Text style={styles.favorite}>Show More</Text>
                            </Pressable>
                            <Pressable onPress={() => setStatusModal(true)}>
                                <Icon name='add-circle-outline' size={30} />
                            </Pressable>
                        </View>
                    }
                </View>
                {/* <ScrollView >
                    {product.length > 0 && product.map((item, idx) => (
                        <CardProduct navigation={navigation} key={idx} id={item.id} photo={`${item.photo}`} name={item.name} category={item.category_name} price={currencyFormatter.format(item.price)} {...props} />
                    ))}
                </ScrollView> */}
                <View style={styles.containerProduct}>
                    {isLoading ?
                        <ActivityIndicator size={'large'} />
                        :
                        <FlatList data={product} numColumns={2} renderItem={({ item, idx }) => (<CardProduct key={idx} id={item.id} photo={`${item.photo}`} name={item.name} category={item.category_name} price={currencyFormatter.format(item.price)} navigation={navigation} {...props} />)} />
                    }

                </View>
            </View>
            <Modal
                visible={statusModal}
                transparent={true}
                animationType='fade'
            >
                <View style={styles.viewModal}>
                    <View style={styles.wrapperInModal}>
                        <Pressable style={styles.chooseBtn} onPress={handlerToAddProduct}>
                            <Text>New Product</Text>
                        </Pressable>
                        <Pressable style={styles.chooseBtn} onPress={handlerToAddPromo}>
                            <Text>New Promo</Text>
                        </Pressable>
                    </View>
                    <Button
                        buttonStyle={styles.btnCancel}
                        onPress={() => setStatusModal(false)}
                    >
                        <Icon name='close-circle-outline' size={30} color="#FFBA33" />
                    </Button>
                </View>
            </Modal>
            <Modal
                visible={statusModalLg}
                transparent={true}
                animationType='fade'
            >
                <View style={styles.viewModal2}>
                    <Text style={styles.titleLg}>Do You Want To Logout?</Text>
                    <View style={styles.wrapperInModal2}>
                        <Pressable style={styles.chooseBtn} onPress={() => dispatch(logoutAction(navigation.navigate('login')))}>
                            <Icon name='checkmark-outline' size={30} />
                        </Pressable>
                        <Pressable style={styles.chooseBtn} onPress={() => setStatusModalLg(false)}>
                            <Icon name='close-outline' size={30} />
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </DrawerLayout>
    )
}

export default Home