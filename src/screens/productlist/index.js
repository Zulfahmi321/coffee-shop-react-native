import { View, Text, ScrollView, TextInput, Pressable, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
// import HeaderProductList from '../../components/HeaderProductList'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons';
import CardProduct from '../../components/CardProduct';
import { getListProduct } from '../../modules/axios';
import { currencyFormatter } from '../../helpers/formatter';
import { REACT_APP_BE, URL_DEPLOY } from '@env'
import axios from 'axios';
import { useScrollToTop } from '@react-navigation/native';

const ProductList = ({ navigation, ...props }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [listProduct, setListProduct] = useState([])
    // const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(6)
    const [totalPage, setTotalPage] = useState(1)
    // const [meta, setMeta] = useState(null)
    const [menu, setMenu] = useState('all')
    const [sort, setSort] = useState('name')
    const [order, setOrder] = useState('asc')
    const [search, setSearch] = useState('')
    // console.log(page);

    // const handlerGetListProduct = async () => {
    //     try {
    //         setIsLoading(true)
    //         let response = await getListProduct()
    //         console.log(response.data.data);
    //         setListProduct(response.data.data);
    //         setTimeout(() => {
    //             setIsLoading(false)
    //         }, 500);
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     handlerGetListProduct()
    // }, [])

    const renderLoader = () => {
        {
            isLoading ?
                <View style={styles.loaderStyle}>
                    <ActivityIndicator size="large" color="#aaa" />
                </View> : null
        }
    }
    const loadMoreItem = () => {
        // setPage(page + 1);
        setLimit(limit + 6);
    };


    // useEffect(() => {
    //     let url = `${REACT_APP_BE}/product`
    //     if (menu === 'all') {
    //         url += `?page=${page}&limit=${limit}&`
    //     }
    //     if (menu !== 'all') {
    //         url += `?category_name=${menu}&page=${page}&limit=${limit}&`
    //     }
    //     url += `sort=${sort}&order=${order}`
    //     axios
    //         .get(url)
    //         .then(response => {
    //             console.log(response.data.data);
    //             setListProduct(response.data.data)
    //             setTotalPage(!response.data.meta ? "1" : response.data.meta.totalPage)
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })

    // }, [menu, sort, order, page, limit])

    useEffect(() => {
        let url = `${URL_DEPLOY}/product`
        if (menu === 'all') {
            url += `?limit=${limit}&`
        }
        if (menu !== 'all') {
            url += `?category_name=${menu}&limit=${limit}&`
        }
        if (search !== '') {
            url += `name=${search}&`
        }
        url += `sort=${sort}&order=${order}`
        axios
            .get(url)
            .then(response => {
                // console.log(response.data.data);
                setListProduct(response.data.data)
            })
            .catch((error) => {
                console.log(error);
            })

    }, [menu, sort, order, limit, search])

    // useEffect(() => {
    //     let url = `${REACT_APP_BE}/product`
    //     if (menu === 'all') {
    //         url += `?limit=${limit}&`
    //     }
    //     if (menu !== 'all') {
    //         url += `?category_name=${menu}&limit=${limit}&`
    //     }
    //     url += `sort=${sort}&order=${order}`
    //     axios
    //         .get(url)
    //         .then(response => {
    //             console.log(response.data.data);
    //             setListProduct(response.data.data)
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })

    // }, [menu, sort, order])
    return (
        <View style={styles.container}>
            <View style={styles.wrapperHeader}>
                <Icon name='chevron-back-outline' size={30} onPress={() => { navigation.navigate('home') }} />
                <Text style={styles.header}>Products</Text>
            </View>
            {/* <HeaderProductList /> */}
            <View style={styles.searchContainer}>
                <Icon name='search' size={20} color='#9F9F9F' />
                <TextInput style={styles.searchInput} placeholder={'Search'} onChange={(e) => { setSearch(e.nativeEvent.text) }} />
                <Icon name='arrow-up-outline' size={20} onPress={() => setOrder('asc')} />
                <Icon name='arrow-down-outline' size={20} onPress={() => setOrder('desc')} />
            </View>
            <View style={styles.containerProduct}>
                <ScrollView horizontal={true} style={styles.scrollViewH} showsHorizontalScrollIndicator={false}>
                    <Text style={menu === 'all' ? styles.categoryTextAct : styles.categoryText}
                        onPress={() => {
                            setMenu('all')
                            // setPage(1)
                            setLimit(6)
                            setSearch('')
                        }}
                    >All</Text>
                    <Text style={menu === 'coffee' ? styles.categoryTextAct : styles.categoryText}
                        onPress={() => {
                            setMenu('coffee')
                            // setPage(1)
                            setLimit(6)
                            setSearch('')
                        }}
                    >Coffee</Text>
                    <Text style={menu === 'snack' ? styles.categoryTextAct : styles.categoryText}
                        onPress={() => {
                            setMenu('snack')
                            // setPage(1)
                            setLimit(6)
                            setSearch('')
                        }}
                    >Snack</Text>
                    <Text style={menu === 'tea' ? styles.categoryTextAct : styles.categoryText}
                        onPress={() => {
                            setMenu('tea')
                            // setPage(1)
                            setLimit(6)
                            setSearch('')
                        }}
                    >Non Coffee</Text>
                    <Text style={menu === 'food' ? styles.categoryTextAct : styles.categoryText}
                        onPress={() => {
                            setMenu('food')
                            // setPage(1)
                            setLimit(6)
                            setSearch('')
                        }}
                    >Food</Text>
                </ScrollView>
                <View style={styles.sortOrderContainer}>
                    {/* <View style={styles.paginationContainer}>
                        {page === 1 ?
                            <Icon name='caret-back-outline' size={25} color="#e0d9d1" />
                            :
                            <Icon name='caret-back-outline' size={25} onPress={() => setPage(page - 1)} />
                        }
                        <Text style={styles.pageNumber}>{page}</Text>
                        {page === Number(totalPage) ?
                            <Icon name='caret-forward-outline' size={25} color="#e0d9d1" />
                            :
                            <Icon name='caret-forward-outline' size={25} onPress={() => setPage(page + 1)} />
                        }
                    </View> */}
                    <View style={styles.sortContainer}>
                        <Pressable>
                            <Text style={styles.sort} onPress={() => setSort('name')} >Name</Text>
                        </Pressable>
                        <Pressable>
                            <Text style={styles.sort} onPress={() => setSort('price')}>Price</Text>
                        </Pressable>
                    </View>
                </View>
                {/* <ScrollView horizontal={true} style={styles.scrollViewH} showsHorizontalScrollIndicator={false}>
                {listProduct.length > 0 && listProduct.map((item, idx) => (
                    <CardProduct key={idx} id={item.id} photo={`${item.photo}`} name={item.name} category={item.category_name} price={currencyFormatter.format(item.price)} />
                ))}
            </ScrollView> */}
                {isLoading ?
                    <ActivityIndicator size={'large'} />
                    :
                    <FlatList
                        data={listProduct}
                        numColumns={2}
                        // keyExtractor={item => item.id}
                        ListFooterComponent={renderLoader}
                        onEndReached={loadMoreItem}
                        // onEndReachedThreshold={0}
                        renderItem={({ item, idx }) => (
                            <CardProduct
                                key={idx}
                                id={item.id}
                                photo={`${item.photo}`}
                                name={item.name}
                                category={item.category_name}
                                price={currencyFormatter.format(item.price)}
                                navigation={navigation} {...props} />)} />
                }
            </View>
        </View>
    )
}

export default ProductList