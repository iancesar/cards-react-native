import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },

    containerText: {
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight + 20
    },

    text: {
        color: '#fff',
        fontSize: 32
    },

    cardContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 40,
        paddingLeft: 25,
        paddingRight: 15,
    },

    cardName: {
        color: "#fff",
        fontSize: 24,
    },

    card: {
        width: 315,
        height: 520,
        borderRadius: 18,
    },


    newCard: {
        borderWidth: 0.5,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    newCardIcon: {
        fontSize: 100,
        color: '#fff'
    },

    cardInfo: {
        flex: 1,
    },

    brandCardContainer: {
        alignItems: "flex-end",

    },

    chipContainer: {
        bottom: 0,
        position: 'absolute',
    },

    chip: {
        width: 60,
        height: 80,
        left: 130,
        bottom: 40,
        resizeMode: 'stretch',
    },
    
    cardNumberContainer: {
    },
    
    cardNumber: {
        marginTop: 60,
        color: '#fff',
        fontSize: 32,
        right: 45,
        width: 400,
        fontFamily: 'incosolata-regular',
        transform: [
            {
                rotate: '270deg'
            }
        ]
    },



    visa: {
        width: 100,
        height: 30,
        marginTop: 60,
        resizeMode: 'stretch',
        transform: [{
            rotate: '270deg'
        }]
    },

    mastercard: {
        width: 100,
        height: 80,
        marginTop: 20,
        resizeMode: 'stretch',
        transform: [{
            rotate: '270deg'
        }]
    },

    elo: {
        width: 70,
        height: 70,
        marginTop: 20,
        marginRight: 10,
        resizeMode: 'stretch',
        transform: [{
            rotate: '270deg'
        }]
    },

});


export default styles;