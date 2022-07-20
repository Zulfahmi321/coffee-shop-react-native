import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    titleContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '15%',
        marginVertical: '30%'
    },
    title: {
        fontFamily: 'Poppins-Bold',
        color: '#000000',
        fontSize: 65,
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    subtitle: {
        color: '#000000',
        textAlign: 'center'
    },
    btnContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
    },
    input: {
        width: '80%',
        borderBottomColor: '#cccccc',
        fontFamily: 'Poppins-Bold',
        color: '#000000',
        fontSize: 14,
        borderBottomWidth: 2,
        alignSelf: 'center',
    },
    resend: {
        color: '#00000',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 15,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#6A4029',
        width: '80%',
        alignSelf: 'center',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: '5%'
    },
    buttonText: {
        color: '#ffffff',
        fontFamily: 'Poppins-Bold',
        fontSize: 17
    },
})