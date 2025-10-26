import React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

export default function SearchBar(){
    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.searchInput}
                placeholder="China"
                placeholderTextColor="#888"
            />
            <TouchableOpacity style={styles.filterButton}>
                <Ionicons name="options-outline" size={24} color="gray"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderColor: '#ddd'
    },
    searchInput:{
        flex: 1,
        height: 40,
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        borderColor: '#ddd',
        borderWidth: 1
    },
    filterButton:{
        marginLeft: 10,
        padding: 8,
    }
})