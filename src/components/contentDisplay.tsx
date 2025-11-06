import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import {Country} from '../../app/types';
import Card from './card';
import loadingIndicator from './loading'
import LoadingIndicator from './loading';
import ErrorMessage from './errorMessage';
import InitialContent from './initialContent';

type ContentDisplayProps = {
    isLoading: boolean,
    error: string | null;
    countries: Country[];
    numColumns: number;
    columnWidth: number;
};

export default function ContentDisplay({isLoading, error, countries, numColumns, columnWidth,}: ContentDisplayProps){
    if(isLoading){
        return <LoadingIndicator/>
    }

    if(error){
        return <ErrorMessage message={error}/>
    }

    if(countries.length > 0){
        return (
            <FlatList
                data={countries}
                renderItem={({item}) => 
                    <Card item={item} width={columnWidth}/>
                }
                keyExtractor={(item) => item.name.common}
                numColumns={numColumns}
                key={numColumns}
                style={styles.list}
            />
        )
    }

    return <InitialContent/>

}


const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingHorizontal: 8,
  },
});