import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Country } from '../../app/types';

const CARD_MIN_WIDTH = 180;


type CountryCardProps = {
  item: Country;
  width: number;
};

export default function Card({item, width}: CountryCardProps){
    const router = useRouter();
    
    const name = item.name.common;
    const flagUrl = item.flags.png;
    const capital = item.capital ? item.capital[0] :'Sem capital';
    const population = item.population.toLocaleString();

    const handlePress = () => {
        router.push(`/country/${encodeURIComponent(name)}`);
    }

    return (
        <TouchableOpacity onPress={handlePress} style={[styles.touchable, {width: width - 10}]}>
            <View style={styles.card}>
                <Image style={styles.flag} source={{uri: flagUrl}}/>
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.info}>Capital: {capital}</Text>
                    <Text style={styles.info}>População: {population}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 8,
        padding: 15,
        alignItems: 'center',
    },
    flag:{
        width: 60,
        height: 40,
        borderRadius: 4,
        borderWidth: 1,
    },
    infoContainer:{
        paddingTop: 10,
        alignItems: 'center'
    },
    name:{
        fontSize: 14,
        color: '#667',
        marginTop: 2,
    },
    info:{
        fontSize: 14,
        color: '#FF7F7F',
        marginTop: 2,
    },
    touchable:{
        margin: 5,
    }
})