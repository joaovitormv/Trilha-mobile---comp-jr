import React from 'react'
import {Text, View, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {useRouter} from 'expo-router';

export default function Header({showBackButton = false}){
    const router = useRouter();

    const handleBackPress = () =>{
        if(router.canGoBack()){
            router.back();
        }
    }

    return(
        <View style={styles.container}>
        <Image
            source={require('../../assets/images/icon.png')}
            style={styles.logo}
        />

        <Text style={styles.Text}>Países do Mundo</Text>

        { showBackButton && (
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                <Ionicons name={'chevron-back'} size={30} color={"white"}/>
            </TouchableOpacity>
        )}
        </View>
    )
} 
    


const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        justifyContent: "space-between"
    },
    backButton:{
        marginRight: 10,
    },
    logo:{
        width: 30,
        height: 30,
    },
    Text:{
        color: "white",
        fontWeight: "bold",
        fontSize:18
        
    }
})