import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F8',
    },
    containerEdit: {
        alignItems: 'center',
        flex: 1,
    },
    containerTextEdit: {
        padding: 30,
    },
    imageProfile: {
        width: 90,
        height: 90,
        borderRadius: 50,
        marginTop: 10,
    },
    containerPhoto: {
        position: 'relative',
        padding: 10,
    },
    btnEdit: {
        backgroundColor: '#6A4029',
        width: '7%',
        paddingTop: 4,
        paddingBottom: 4,
        padding: 3,
        borderRadius: 50,
        position: 'absolute',
        top: 85,
        left: 70,
    },
    inputBox: {
        marginTop: 10,
        borderBottomColor: '#9F9F9F',
        borderBottomWidth: 1,
    },
    dateBox: {
        marginTop: 10,
        borderBottomColor: '#9F9F9F',
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    radioBox: {
        marginTop: 10,
        flexDirection: 'row',
    },
    radio: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    labelGender: {
        marginLeft: 5,
        fontSize: 16,
        color: 'black',
    },
    label: {
        fontWeight: '800',
        fontSize: 16,
    },
    containerDate: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnSave: {
        marginTop: 20,
        padding: 13,
        borderRadius: 15,
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