import React from 'react'
import { Text, View, SafeAreaView } from "react-native";
import Header from "../components/Header/header";
import SearchBar from "../components/searchBar"

export default function Index() {
    return (
    <SafeAreaView>
        <Header/>
        <SearchBar/>
    </SafeAreaView>
    
);
}
