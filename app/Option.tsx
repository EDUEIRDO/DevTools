import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function SelectPage() {
    const router = useRouter();

    const handleSelectOption = (option: string) => {
        router.push({
            pathname: '../Paginas/API',
            params: { selectedOption: option },
        });
    };

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectOption('USD-BRL')}>
                <Text>Dolar para Real</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectOption('EUR-BRL')}>
                <Text>Euro para Real</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectOption('BTC-BRL')}>
                <Text>Bitcoin para Real</Text>
            </TouchableOpacity>
            <StatusBar style="dark" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    optionButton: {
        margin: 10,
        padding: 10,
        backgroundColor: '#007AFF',
        borderRadius: 5,
    },
});
