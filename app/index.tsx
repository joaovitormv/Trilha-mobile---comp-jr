import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, useWindowDimensions } from "react-native";
import { mockCountries } from '../src/api/mockData';
import Card from '../src/components/card';
import Header from "../src/components/header";
import SearchBar from "../src/components/searchBar";
import { Country } from './types';
 
const CARD_MIN_WIDTH = 180;
const LIST_PADDING = 8;


export default function Index() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    
    const {width} = useWindowDimensions();

    const numColumns = Math.max(1, Math.floor(width / CARD_MIN_WIDTH));
    const columnWidth = (width - (LIST_PADDING * 2)) / numColumns

    const handleSearch = (searchText: string ) =>{
      console.log(searchText); //terminar isso
    }

    return (
    <SafeAreaView>
        <Header/>
        <SearchBar onSearch={handleSearch}/>
        <FlatList
            data={countries}
            renderItem={({item}) => <Card item={item} width={columnWidth}/>}
            keyExtractor={(item) => item.name.common}
            style={styles.list}
            numColumns={numColumns}
            key={numColumns}
            
        />
    </SafeAreaView>
    
);
}const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 8,
  },
});
