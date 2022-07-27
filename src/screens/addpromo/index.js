import { View, Text, ScrollView, Image, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from '@rneui/themed'
import Camera from '../../assets/img/camera.png'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import moment from 'moment';
import { useSelector } from 'react-redux';
import styles from './styles';
import { addPromo } from '../../modules/axios';
const AddPromo = ({ navigation }) => {
    const [date, setDate] = useState(new Date());
    const { token } = useSelector(state => state.auth);
    const [open, setOpen] = useState(false);
    const [photo, setPhoto] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [body, setBody] = useState({
        name: '',
        normal_price: '',
        description: '',
        discount: '',
        end_date: '',
        coupon: '',
    });

    const handlerAddPromo = async () => {
        try {
            setIsLoading(true)
            const response = await addPromo(body)
            console.log(response)
            setTimeout(() => {
                setIsLoading(false)
                navigation.replace('home')
            }, 200);
        }
        catch (error) {
            console.log(error);
            setIsLoading(false)
        }
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.containerPromo}>
                <View style={styles.Photo}>
                    <View style={styles.photoWrapper}>
                        <Image
                            source={Camera}
                            style={styles.imageProduct}
                        />
                        <Pressable
                            style={styles.btnUpload}>
                            <Icon name="pencil" size={20} color="white" />
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
                        placeholder="Input the promo price"
                        placeholderTextColor="#9F9F9F"
                        onChange={(e) => setBody({ ...body, normal_price: e.nativeEvent.text })}
                    />
                </View>
                <View style={styles.inputBox}>
                    <Text style={styles.labelStyle}>Discount %</Text>
                    <TextInput
                        placeholder="Input the promo discount"
                        placeholderTextColor="#9F9F9F"
                        onChange={(e) => setBody({ ...body, discount: e.nativeEvent.text })}
                    />
                </View>
                <View style={styles.dateBox}>
                    <Text style={styles.labelStyle}>Expired Date</Text>
                    <View style={styles.containerDate}>
                        <Text>{`${moment(body.end_date).format(
                            'MMMM Do YYYY',
                        )}`}</Text>
                        <Icon
                            name="calendar-outline"
                            size={20}
                            onPress={() => setOpen(true)}
                            style={styles.dateLogo}
                        />
                        <DatePicker
                            modal
                            mode="date"
                            open={open}
                            date={date}
                            onConfirm={dateInput => {
                                setOpen(false);
                                setBody({ ...body, end_date: dateInput });
                                setBody({
                                    ...body,
                                    end_date: moment(dateInput).format('YYYY-MM-DD'),
                                });
                            }}
                            onCancel={() => {
                                setOpen(false);
                            }}
                        />
                    </View>
                </View>
                <View style={styles.inputBox}>
                    <Text style={styles.labelStyle}>Description</Text>
                    <TextInput
                        placeholder="Input the promo description"
                        placeholderTextColor="#9F9F9F"
                        onChangeText={description => setBody({ ...body, description })}
                    />
                </View>
                <View style={styles.inputBox}>
                    <Text style={styles.labelStyle}>Coupon</Text>
                    <TextInput
                        placeholder="Input the promo coupon"
                        placeholderTextColor="#9F9F9F"
                        onChangeText={code => setBody({ ...body, code })}
                    />
                </View>
                <Button
                    onPress={handlerAddPromo}
                    buttonStyle={styles.btnSave}
                    loading={isLoading}
                    color="#6A4029">
                    Save Promo
                </Button>
            </View>
        </ScrollView>
    )
}

export default AddPromo