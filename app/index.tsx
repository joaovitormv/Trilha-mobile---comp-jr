import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, useWindowDimensions, View, Text, ActivityIndicator } from "react-native";
import { searchCountryByName } from '@/src/api/restCountries';
import Card from '../src/components/card';
import Header from "../src/components/header";
import SearchBar from "../src/components/searchBar";
import { Country } from './types';
import ContentDisplay from '@/src/components/contentDisplay';

const CARD_MIN_WIDTH = 180;
const LIST_PADDING = 8;


export default function Index() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { width } = useWindowDimensions();

  const numColumns = Math.max(1, Math.floor(width / CARD_MIN_WIDTH));
  const columnWidth = (width - (LIST_PADDING * 2)) / numColumns

  async function handleSearch(searchText: string){
    setIsLoading(true);
    setError(null);
    setCountries([]);

    try{
      const data = await searchCountryByName(searchText);
      setCountries(data);
    }catch(e){
      if(e instanceof Error){
        setError(e.message);
      }else{
        setError("Erro desconhecido");
      }
    } finally{
      setIsLoading(false);
    }
  }


  return (
    <SafeAreaView>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <ContentDisplay
        isLoading={isLoading}
        error={error}
        countries={countries}
        numColumns={numColumns}
        columnWidth={columnWidth}
      />
    </SafeAreaView>

  );
}
