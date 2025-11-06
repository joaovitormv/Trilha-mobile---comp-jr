import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
const foto = require('../assets/images/mundo.webp')


export default function InitialContent(){
    return(
        <View style={styles.container}>
            <Image source={foto} resizeMode="contain" style={styles.image}/>
            <Text style={styles.title}>Bem-vindo ao Países do Mundo!</Text>
            <Text style={styles.credit}>Aplicativo feito para o processo de trainee da Comp Junior </Text>
            <Text style={styles.credit}>Desenvolvido por João Vitor Maximiano Vieira</Text>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image:{
        width: 300,
        height: 300,
        marginBottom: 10,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    credit:{
        fontSize: 12,
        marginTop: 5,

    }
})
