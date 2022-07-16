import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flex: 1
    },
    imgBg: {
        flex: 1,
    },
    bgClr: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        opacity: 10,
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: '5%',
        paddingBottom: '5%'
    },
    title: {
        fontSize: 50,
        paddingTop: 100,
        textAlign: 'center',
        fontWeight: '700',
        color: '#FFFFFF',
        fontFamily: 'Poppins-Bold'
    },
    btnContainer: {
        marginHorizontal: 30
    },
    button: {
        backgroundColor: '#FFBA33',
        width: '100%',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: '5%',
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 17,
        color: '#6A4029'
    },
    bgClrWel: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        opacity: 10,
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: '5%',
        paddingBottom: '5%'
    },
    body: {
        fontFamily: 'Poppins-Reguler',
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center'
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
});