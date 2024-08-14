import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '@/components/customButton';

export default function HomeScreen() {

    return(
        <View style={styles.container}>
            <Text style={styles.homeText}>Menu</Text>
            <View style={styles.containerButton}>
                <CustomButton page='./Option' nameIcon="logo-google" size={15} title="Bt Teste API" />
                <CustomButton page='../Paginas/teste' nameIcon="logo-google" size={15} title="Bt Teste" />
                <CustomButton page='../Paginas/teste' nameIcon="logo-google" size={15} title="Bt Teste" />
                <CustomButton page='../Paginas/teste' nameIcon="logo-google" size={15} title="Bt Teste" />   
            </View>
            <StatusBar style="dark" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeText: {
        fontSize: 15,
    },
    containerButton: {
        flexGrow: 1,
    },
})