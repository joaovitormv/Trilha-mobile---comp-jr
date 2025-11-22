import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import Header from '../src/components/header';
import { Country } from './types';
import { searchCountryByName } from '@/src/api/restCountries';
import LoadingIndicator from '@/src/components/loading';
import ErrorMessage from '@/src/components/errorMessage';

export default function CountryDetail() {
  const { name } = useLocalSearchParams<{name: string}>(); // Pega o nome da URL

  const [country, setCountry] = useState<Country | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try{
        if(!name) return;
        const data = await searchCountryByName(name);
        if(data.length > 0){
          setCountry(data[0]);
        }else{
          setError("País não encontrado");
        }
      }catch(e){
        setError("Erro ao carregar detalhes");
      }finally{
        setIsLoading(false);
      }
    };
    fetchCountryData();
  }, [name])

  if(isLoading){
    return(
      <SafeAreaView>
        <Header showBackButton={true}/>
        <LoadingIndicator/>
      </SafeAreaView>
    )
  }

  if(error || !country){
    return(
      <SafeAreaView>
        <Header showBackButton={true}/>
        <ErrorMessage message={error || "País não encontrado"}/>
      </SafeAreaView>
    )
  }

  return(
    <SafeAreaView>
      <Header showBackButton={true}/>
      <ScrollView style={styles.scrollContent}>
        <View style={styles.flagContainer}>
          <Image 
            source={{ uri: country.flags.png }} 
            style={styles.flag} 
            resizeMode="contain" 
        />
        </View>
        
        <Text style={styles.countryName}>{country.name.common}</Text>
        <Text style={styles.officialName}>{country.name.official}</Text>
        <View style={styles.infoBox}>
            <InfoRow label="Capital" value={country.capital?.[0] || 'N/A'} />
            <InfoRow label="População" value={country.population.toLocaleString()} />
            <InfoRow label="Região" value={country.region} />
            <InfoRow label="Sub-região" value={country.subregion || 'N/A'} />
            <InfoRow label="Área" value={`${country.area.toLocaleString()} km²`} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

function InfoRow({ label, value }: { label: string, value: string | number }) {
    return (
        <View style={styles.row}>
            <Text style={styles.label}>{label}:</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  flagContainer: {
    width: '100%',
    height: 250, 
    marginBottom: 10,
  },
  flag: {
    width: '100%',
    height: '100%',
  },
  countryName: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: '#333',
  },
  officialName: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
    paddingHorizontal: 20,
  },
  infoBox: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 8,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#555',
    flex: 1, 
  },
  value: {
    fontSize: 15,
    color: '#333',
    flex: 1, 
    textAlign: 'right', 
  },
  

});