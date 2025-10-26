// app/country/[name].tsx
import React from 'react';
import {Text, SafeAreaView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Header from '../src/components/header';

export default function CountryDetail() {
  const { name } = useLocalSearchParams(); // Pega o nome da URL

  return (
    <SafeAreaView>
      <Header showBackButton={true}/>
      <Text>Detalhes para: {name}</Text>
    </SafeAreaView>
  );
}