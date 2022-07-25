import { View, Text, Pressable, Image, TextInput, ScrollView } from 'react-native'
import { Button } from '@rneui/themed'
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react'

import styles from './styles';
const AddProduct = () => {
    return (
        <>
            <ScrollView>
                <View style={styles.containerNew}>
                    <View style={styles.Photo}>
                        <View style={styles.photoWrapper}>
                            <Image
                                source={{}}
                                style={styles.imageProduct}
                            />
                            <Pressable
                                style={styles.btnUpload}>
                                <Icon name='add-circle-outline' size={30} />
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={styles.labelStyle}>Name</Text>
                        <TextInput
                            placeholder="Input the product name"
                            placeholderTextColor="#9F9F9F"
                            value={""}

                        />
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={styles.labelStyle}>Price</Text>
                        <TextInput
                            placeholder="Input the product price"
                            placeholderTextColor="#9F9F9F"
                            value={""}

                        />
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={styles.labelStyle}>Delivery info</Text>
                        <TextInput
                            placeholder="Type delivery information"
                            placeholderTextColor="#9F9F9F"
                            value={""}

                        />
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={styles.labelStyle}>Description</Text>
                        <TextInput
                            placeholder="Describe your product"
                            placeholderTextColor="#9F9F9F"
                            value={""}

                        />
                    </View>
                    <View style={styles.buttonBox}>
                        <Text style={styles.labelStyle}>Select Category</Text>
                        <View style={styles.btnWrapperCategory}>
                            <Button
                                buttonStyle={
                                    styles.btnActive
                                    // body.categoryId === 1 ? styles.btnActive : styles.btnCategory
                                }>
                                COFFEE
                            </Button>
                            <Button
                                buttonStyle={
                                    styles.btnActive
                                    // body.categoryId === 2 ? styles.btnActive : styles.btnCategory
                                }>
                                NON COFFEE
                            </Button>
                            <Button
                                buttonStyle={
                                    styles.btnActive
                                    // body.categoryId === 3 ? styles.btnActive : styles.btnCategory
                                }>
                                FOOD
                            </Button>
                        </View>
                    </View>
                    <Button

                        buttonStyle={styles.btnSave}
                        color="#6A4029">
                        Save Product
                    </Button>
                </View>
            </ScrollView>
            {/* <Modal
                visible={modal.modalUpload}
                transparent={true}
                animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalBody}>
                        <Text style={styles.titleModal}>Upload Photo</Text>
                        <Text>Choose Your Profile Picture</Text>
                        <View style={styles.containerBtnUpload}>
                            <Button
                                onPress={takePhotoFromCamera}
                                buttonStyle={styles.btnUpload1}>
                                Take a Photo
                            </Button>
                            <Button
                                onPress={chooseFromLibrary}
                                buttonStyle={styles.btnUpload1}>
                                Choose from library
                            </Button>
                            <Button
                                onPress={() => {
                                    setModal({ ...modal, modalUpload: false });
                                }}
                                buttonStyle={styles.btnUpload1}>
                                Cancel
                            </Button>
                        </View>
                    </View>
                </View>
            </Modal> */}
        </>
    )
}

export default AddProduct