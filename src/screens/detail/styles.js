import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingTop: Constants.statusBarHeight + 20
    },

    containerText: {
        alignItems: 'center',
    },

    text: {
        marginTop: 10,
        color: '#fff',
        fontSize: 32,
        fontFamily: 'incosolata-regular',

    },

    cardContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 40,
        paddingLeft: 25,
        paddingRight: 15,
    },

    cardName: {
        color: "#fff",
        fontSize: 24,
    },

    card: {
        width: 380,
        height: 265,
        borderRadius: 18,
    },

    cardInfo: {
        flex: 1,
    },

    brandCardContainer: {
        bottom: 0,
        right: 0,
        position: 'absolute',

    },

    chipContainer: {
        flex: 1,
        justifyContent: 'center'
    },

    chip: {
        width: 50,
        height: 60,
        left: 40,
        resizeMode: 'stretch',
        transform: [
            {
                rotate: '270deg'
            }
        ]
    },

    cardNumberContainer: {
        flex: 1,
        alignItems: 'center',
    },

    cardNumber: {
        color: '#fff',
        fontSize: 26,
        fontFamily: 'incosolata-regular',
    },
    cardOwner: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'incosolata-regular',
    },

    visa: {
        width: 80,
        height: 25,
        bottom: 20,
        right: 15,
        resizeMode: 'stretch',
    },

    mastercard: {
        width: 80,
        height: 60,
        bottom: 10,
        right: 15,
        resizeMode: 'stretch',
    },

    elo: {
        width: 50,
        height: 50,
        bottom: 15,
        right: 15,
        resizeMode: 'stretch',
    },

});


export default styles;