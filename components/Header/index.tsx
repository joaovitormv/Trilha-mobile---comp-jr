import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default () => (
    <View style={style.Header}>
        <Text> Paises do Mundo </Text>
    </View>
)

const style= StyleSheet.create({
    Header: {
        backgroundColor: "red"
    }
})