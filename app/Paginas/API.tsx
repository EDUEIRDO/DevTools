import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useGlobalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

interface ExchangeRate{
    code: string;
    codein: string;
    name: string;
    high: string;
    low: string;
    pctChange: string;
    varBid: string;
    bid: string;
    ask: string;
    timestamp: string;
    create_date: string;
}

export default function CurrencyConverter() {
    const API_URL = 'https://economia.awesomeapi.com.br/last/';
    const [data, setData] = useState<ExchangeRate | null>(null);
    const [error, setError] = useState<string | null>(null);

    // Obtenha o parâmetro da rota
    const { selectedOption } = useGlobalSearchParams<{ selectedOption: string }>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}${selectedOption}`);
                const key = Object.keys(response.data)[0];
                setData(response.data[key]);
            } catch (error) {
                setError('Erro ao buscar dados da API');
                console.error('Error', error);
            }
        };

        if (selectedOption) {
            fetchData();
        }
    }, [selectedOption]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cotação</Text>
            {error && <Text style={styles.error}>{error}</Text>}
            {data ? (
                <View style={styles.item}>
                    <Text>Moeda : {data.name}</Text>
                    <Text>Alta : {data.high}</Text>
                    <Text>Baixa : {data.low}</Text>
                    <Text>Compra : {data.bid}</Text>
                    <Text>Venda : {data.ask}</Text>
                    <Text>Variação : {data.varBid}</Text>
                    <Text>Porcentagem de Variação : {data.pctChange}</Text>
                </View>
            ) : (
                <Text>Carregando...</Text>
            )}
            <StatusBar style="dark" />
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        marginTop: 30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    item: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        marginVertical: 2,
        borderRadius: 2,
    },
    error: {
        color: 'red',
        marginBottom: 16,
    },
});
