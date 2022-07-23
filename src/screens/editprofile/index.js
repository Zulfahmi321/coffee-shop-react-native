import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Image, Text, Pressable, TextInput, ScrollView } from 'react-native';
import moment from 'moment';
import { Button } from '@rneui/base';
// import { getProfileAxios, updateProfileAxios } from '../../modules/user';
// import ModalNav from '../../components/ModalNav/ModalNav/index';
import DatePicker from 'react-native-date-picker';
import ProfDef from '../../assets/img/profdef.png';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { editProfile, getProfile } from '../../modules/axios';

const EditProfile = ({ navigation }) => {
    const { token } = useSelector(state => state.auth);
    const { user } = useSelector(state => state.user);
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    // console.log(token);
    // const [showModal, setShowModal] = useState(false);
    // const [username, setUsername] = useState('');
    // const [gender, setGender] = useState('');
    // const [mobile_number, setMobileNumber] = useState('');
    // const [date_of_birth, setDateOfBirth] = useState('');
    // const [address, setAddress] = useState('');
    const [body, setBody] = useState({
        profile_picture: null,
        username: '',
        gender: '',
        mobile_number: '',
        date_of_birth: '',
        address: '',
    });
    console.log(body);

    // const handlerGetProfile = async () => {
    //     try {
    //         setIsLoading(true)
    //         const response = await getProfile(token)
    //         // console.log(response.data.data.data[0])
    //         setProfile(response.data.data.data[0])
    //         setTimeout(() => {
    //             setIsLoading(false)
    //         }, 500);
    //     }
    //     catch (error) {
    //         console.log(error);
    //         setIsLoading(false)
    //     }
    // };
    useEffect(() => {
        setBody(user)
    }, [user])

    const handlerEditProfile = async () => {
        try {
            setIsLoading(true)
            let newBody = new FormData()
            newBody.append('profile_picture', profile_picture);
            newBody.append('mobile_number', username);
            newBody.append('gender', gender);
            newBody.append('address', address);
            newBody.append('date_of_birth', date_of_birth);
            const config = { headers: { Authorization: `Bearer ${token}`, "content-type": "multipart/form-data" } }
            // const body = { username, gender, mobile_number, date_of_birth, address }
            const response = await editProfile(newBody, config)
            console.log(response);
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
        <ScrollView style={styles.container}>
            <View style={styles.containerEdit}>
                <View style={styles.containerPhoto}>
                    <Image
                        source={user.photo ? { uri: user.photo } : ProfDef}
                        style={styles.imageProfile}
                    />
                    <Pressable style={styles.btnEdit}>
                        <Icon name="pencil" size={20} color="white" />
                    </Pressable>
                </View>
            </View>
            <View style={styles.containerTextEdit}>
                <View style={styles.inputBox}>
                    <Text style={styles.label}>Name :</Text>
                    <TextInput placeholder='Input Your Name' value={body.username} onChange={(e) => setBody({ ...body, username: e.nativeEvent.text })} />
                </View>
                <View style={styles.radioBox}>
                    <Pressable style={styles.radio} onPress={() => setBody({ ...body, gender: 'male' })}>
                        <Icon name={body.gender === 'male' ? 'radio-button-on-outline' : 'radio-button-off-outline'} size={15} color={'#6A4029'} />
                        <Text style={styles.labelGender}>Male</Text>
                    </Pressable>
                    <Pressable style={styles.radio} onPress={() => setBody({ ...body, gender: 'female' })}>
                        <Icon name={body.gender === 'female' ? 'radio-button-on-outline' : 'radio-button-off-outline'} size={15} color={'#6A4029'} />
                        <Text style={styles.labelGender}>Female</Text>
                    </Pressable>
                </View>
                <View style={styles.inputBox}>
                    <Text style={styles.label}>Email Address :</Text>
                    <TextInput
                        editable={false}
                        value={user.email}
                        placeholder="Input your Email Address"
                    />
                </View>
                <View style={styles.inputBox}>
                    <Text style={styles.label}>Phone Number :</Text>
                    <TextInput placeholder='Input Your Number' value={body.mobile_number} onChange={(e) => setBody({ ...body, mobile_number: e.nativeEvent.text })} />
                </View>
                <View style={styles.dateBox}>
                    <Text style={styles.label}>Date of Birth :</Text>
                    <View style={styles.containerDate}>
                        <Text>{`${moment(user.date_of_birth).format('MMMM DD YYYY')}`}</Text>
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
                                setDate(dateInput);
                                setBody({
                                    ...body,
                                    date_of_birth: moment(dateInput).format('YYYY-MM-DD'),
                                });
                            }}
                            onCancel={() => {
                                setOpen(false);
                            }}
                        />
                    </View>
                </View>
                <View style={styles.inputBox}>
                    <Text style={styles.label}>Delivery Adress :</Text>
                    <TextInput placeholder='Input Your Address' value={body.address} onChange={(e) => setBody({ ...body, address: e.nativeEvent.text })} />
                </View>
                <Button
                    onPress={handlerEditProfile}
                    title="Save and Update"
                    color="#6A4029"
                    loading={isLoading}
                    buttonStyle={styles.btnSave}
                />
            </View>
            {/* <ModalNav
                show={showModal}
                hide={() => setShowModal(!showModal)}
                navigaction={navigation}
                title={isError ? message.error : message.success}
                status={true}
                setShow={setShowModal}
            /> */}
        </ScrollView>
    );
};

export default EditProfile;