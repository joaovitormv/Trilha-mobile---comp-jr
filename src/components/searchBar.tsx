import React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import {Ionicons} from '@expo/vector-icons'

type SearchBarProps = {
  onSearch: (query: string) => void;
}; //o atributo onSearch é uma função do tipo void.

export default function SearchBar({onSearch}: SearchBarProps){
    const [query, setQuery] = useState<string>(""); //armazena o texto que o user está digitando
    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.searchInput}
                placeholder="China"
                placeholderTextColor="#888"
                value={query}
                onChangeText={setQuery}
                onSubmitEditing={() => onSearch(query)}
                returnKeyType="search" //muda o botao de enter para search
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