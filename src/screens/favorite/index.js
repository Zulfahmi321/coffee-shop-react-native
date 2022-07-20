import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles'
import CardProduct from '../../components/CardProduct';
import { currencyFormatter } from '../../helpers/formatter';
import { getProductFav } from '../../modules/axios';
// import { ScrollView } from 'react-native-gesture-handler';
const Favorite = ({ navigation, ...props }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [productFav, setProductFav] = useState([])

    const handlerGetProductFav = async () => {
        try {
            setIsLoading(true)
            let response = await getProductFav()
            console.log(response);
            setProductFav(response.data.data)
            setTimeout(() => {
                setIsLoading(false)
            }, 500);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        handlerGetProductFav()
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.wrapperHeader}>
                <Icon name='chevron-back-outline' size={30} onPress={() => { navigation.navigate('home') }} />
                <Text style={styles.header}>Favorite Products</Text>
            </View>
            <View style={styles.containerProduct}>
                {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {productFav.length > 0 && productFav.map((item, idx) => (
                        <CardProduct key={idx} id={item.id} photo={`${item.photo}`} name={item.name} category={item.category_name} price={currencyFormatter.format(item.price)} />
                    ))}
                </ScrollView> */}
                {isLoading ?
                    <ActivityIndicator size={'large'} />
                    :
                    <FlatList data={productFav} numColumns={2} renderItem={({ item, idx }) => (<CardProduct key={idx} id={item.id} photo={`${item.photo}`} name={item.name} category={item.category_name} price={currencyFormatter.format(item.price)} navigation={navigation} {...props} />)} />
                }
            </View>
        </View>
    )
}

export default Favorite