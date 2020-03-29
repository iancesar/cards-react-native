import React from 'react'
import { Text, View, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles'
import commonsCardStyle from '../commonsCardStyle'

import chip from '../../assets/chip2.png'
import elo from '../../assets/elo.png'
import visa from '../../assets/visa.png'
import mastercard from '../../assets/mastercard.png'


export default function Detail({ route }) {


    const { card } = route.params

    console.log(card)

    function getFlag(card) {
        switch (card.card.flag) {
            case "visa":
                return visa;
            case 'elo':
                return elo;
            case 'mastercard':
                return mastercard
            default:
                break;
        }
    }

    return (
        <View style={styles.container}>


            <View style={styles.cardContainer}>
                <LinearGradient
                    colors={commonsCardStyle[card.color]} style={{ borderRadius: 14 }}>
                    <View style={[styles.card, commonsCardStyle[card.color]]}>
                        
                        <View style={styles.containerText}>
                            <Text style={styles.text}>{card.name}</Text>
                        </View>

                        <View style={styles.chipContainer}>
                            <Image source={chip} style={styles.chip} />
                        </View>

                        <View style={styles.cardNumberContainer}>
                            <Text style={styles.cardNumber}>{card.card.number}</Text>
                            <Text style={styles.cardOwner}>IAN C V REGO</Text>
                        </View>


                        <View style={styles.brandCardContainer}>
                            <Image source={getFlag(card)} style={styles[card.card.flag]} />
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </View>
    );
}