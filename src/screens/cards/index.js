import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles'
import commonsCardStyle from '../commonsCardStyle'

import chip from '../../assets/chip2.png'

import elo from '../../assets/elo.png'
import visa from '../../assets/visa.png'
import mastercard from '../../assets/mastercard.png'

const cards = [
    {
        id: 5,
        name: 'Nubank',
        color: 'model12',
        card: {
            flag: 'visa',
            number: '**** **** **** 9010',
            valid: '03/20',
            name: 'Ian C V Rego',
            cvv: '223'
        }
    },
    {
        id: 6,
        name: 'Caixa',
        color: 'model10',
        card: {
            flag: 'mastercard',
            number: '**** **** **** 9010',
            valid: '03/20',
            name: 'Ian C V Rego',
            cvv: '223'
        }
    },
    {
        id: 7,
        name: 'Caixa',
        color: 'model7',
        card: {
            flag: 'elo',
            number: '**** **** **** 9010',
            valid: '03/20',
            name: 'Ian C V Rego',
            cvv: '223'
        }
    },
    {},
];


export default function Cards() {
    const navigation = useNavigation();
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        loadFont()
    }, [])

    async function loadFont() {
        await Font.loadAsync({
            'incosolata-regular': require('../../assets/fonts/Inconsolata-Regular.ttf'),
        });
        setFontLoaded(true)
    }

    function handleCardSelection(card) {
        navigation.navigate('Detail', { card: card })
    }

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

    function renderCards(index, item) {
        if ((index + 1) === cards.length) {
            return (
                <View style={[styles.card, styles.newCard]}>
                    <TouchableOpacity>
                        <Icon name="plus" style={styles.newCardIcon}></Icon>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <TouchableOpacity key={item.id} onPress={() => handleCardSelection(item)} activeOpacity={0.9}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.cardName}>{item.name}</Text>


                        <LinearGradient
                            colors={commonsCardStyle[item.color]} style={{ borderRadius: 14 }}>
                            <View style={styles.card}>
                                <View style={styles.cardInfo}>
                                    <View style={styles.brandCardContainer}>
                                        <Image source={getFlag(item)} style={styles[item.card.flag]} />
                                    </View>

                                    <View style={styles.chipContainer}>
                                        <Image source={chip} style={styles.chip} />
                                    </View>

                                    {fontLoaded ? (
                                        <View style={styles.cardNumberContainer}>
                                            <Text style={styles.cardNumber}>{item.card.number}</Text>
                                        </View>
                                    ) : null}


                                </View>
                            </View>
                        </LinearGradient>

                    </View>
                </TouchableOpacity>

            )
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.text}>Meus Cartões</Text>
            </View>

            <FlatList
                horizontal={true}
                data={cards}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.cardContainer}>
                        {renderCards(index, item)}
                    </View>
                )}
            />


        </View>
    );
}


