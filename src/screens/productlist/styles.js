import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        margin: 20,
    },
    wrapperHeader: {
        flexDirection: 'row',
        color: '#000000'
    },
    header: {
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        marginLeft: 20,
        margnBottom: 20
    },

    // menuheader
    searchContainer: {
        display: 'flex',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EFEEEE',
        marginHorizontal: '20%',
        borderRadius: 100,
        paddingHorizontal: 15,
    },
    sortOrderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    pageNumber: {
        fontFamily: 'Poppins-Bold',
        fontSize: 20
    },
    sortContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    sort: {
        marginRight: 10,
        borderWidth: 1,
        padding: 5,
        borderRadius: 10
    },
    containerProduct: {
        paddingBottom: 0
    },
    searchInput: {
        paddingVertical: 5,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        width: '100%',
        textAlignVertical: 'auto'
    },
    categoryContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: '5%',
        justifyContent: 'space-between',
        width: 800,
    },
    scrollViewH: {
        marginHorizontal: '5%',
        marginVertical: 10
    },
    categoryText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 17,
        color: '#9A9A9D',
        marginRight: 20
    },
    categoryTextAct: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 17,
        color: '#6A4029',
        marginRight: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#6A4029'
    },
    containerProduct: {
        marginBottom: 320
    },
    loaderStyle: {
        marginVertical: 20,
        alignItems: "center",
    },
})