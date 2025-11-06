import React from "react";
import { View, Text, StyleSheet } from "react-native";

type ErrorMessageProps = {
    message: string;
};

export default function ErrorMessage({message}: ErrorMessageProps){
    return (
        <View style={styles.container}>
            <Text style={styles.errorText}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
});