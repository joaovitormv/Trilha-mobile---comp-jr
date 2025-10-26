// app/country/[name].tsx
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function CountryDetail() {
  const { name } = useLocalSearchParams(); // Pega o nome da URL

  return (
    <SafeAreaView>
      <Text>Detalhes para: {name}</Text>
    </SafeAreaView>
  );
}