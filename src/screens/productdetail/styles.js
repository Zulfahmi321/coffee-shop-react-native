import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        margin: 20,
    },
    wrapperHeader: {
        flexDirection: 'row',
        color: '#000000',
        justifyContent: 'space-between'
    },
    containerDetail: {
        alignItems: 'center',
        marginBottom: 30
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    titleName: {
        fontFamily: 'Poppins-Bold',
        color: 'black',
        fontSize: 20,
        fontWeight: '700',
        marginTop: 10,
    },
    price: {
        fontFamily: 'Poppins-Bold',
        color: '#6A4029',
        fontSize: 20,
        fontWeight: '400',
        marginTop: 5,
    },
    description: {
        margin: 20
    },
    titleDesc: {
        fontFamily: 'Poppins-Bold',
        marginTop: 2,
        color: 'black',
        fontWeight: '500',
        fontSize: 20,
    },
    bodyDesc: {
        textAlign: 'justify'
    },
    buttonCreate: {
        backgroundColor: '#6A4029',
        width: '100%',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: '5%',
    },
    buttonTextCreate: {
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 17,
        color: '#FFFFFF'
    },
    wrapBtnSize: {
        paddingLeft: 40,
        paddingRight: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    btnSize: {
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 100,
        width: 35,
        height: 35,
    },
    btnActive: {
        backgroundColor: '#6A4029',
        width: 35,
        height: 35,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 100,
    },

})