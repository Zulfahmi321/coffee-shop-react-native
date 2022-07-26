import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    wrapperHeader: {
        flexDirection: 'row',
        color: '#000000'
    },
    header: {
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        marginLeft: 20
    },
    containerNew: {
        flex: 1,
        backgroundColor: '#ECECEC',
        paddingTop: 20,
        paddingRight: 35,
        paddingLeft: 35,
        paddingBottom: 20,
    },
    Photo: {
        alignItems: 'center',
    },
    containerPhoto: {
        alignItems: 'center',
        backgroundColor: '#BABABA59',
        width: 150,
        height: 150,
        justifyContent: 'center',
        borderRadius: 100,
    },
    photoWrapper: {
        position: 'relative',
    },
    imageProduct: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    btnUpload: {
        width: 35,
        height: 35,
        backgroundColor: '#6A4029',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        position: 'absolute',
        top: 100,
        left: 115,
    },
    inputBox: {
        marginTop: 20,
        borderBottomColor: '#9F9F9F',
        borderBottomWidth: 2,
    },
    btnSave: {
        // marginBottom: 30,
        marginTop: 5,
        padding: 13,
        borderRadius: 15,
        fontWeight: '900',
    },
    labelStyle: {
        color: 'black',
        fontWeight: '900',
        fontSize: 18,
    },
    modalContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000070',
    },
    modalBody: {
        width: 365,
        height: 280,
        backgroundColor: '#e9e9e9',
        padding: 20,
        borderRadius: 15,
        borderColor: '#6A4029',
        borderWidth: 2,
        marginTop: 350,
        alignItems: 'center',
    },
    titleModal: {
        fontSize: 30,
        color: 'black',
    },
    btnUpload1: {
        marginTop: 15,
        backgroundColor: '#6A4029',
        borderRadius: 10,
    },
    containerBtnUpload: {
        width: '90%',
    },
    buttonBox: {
        marginTop: 20,
    },
    btnWrapperCategory: {
        margin: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    btnCategory: {
        backgroundColor: '#6A4029',
        borderRadius: 10,
        margin: 5
    },
    btnActive: {
        backgroundColor: '#FFBA33',
        borderRadius: 10,
        margin: 5
    },
    viewModal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCC',
        height: 200,
        width: '80%',
        borderRadius: 10,
        marginTop: 200,
        marginLeft: 40
    },
    wrapperInModal: {
        textAlign: 'center',
        flexDirection: 'row',
    },
    chooseBtn: {
        width: 50,
        height: 50,
        backgroundColor: '#979bad',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    btnCancel: {
        width: 100,
        height: 40,
        backgroundColor: '#6A4029',
        borderRadius: 20
    }
});