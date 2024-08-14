import React from "react";
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useRouter, Href } from 'expo-router';

interface CustomButtonProps {
    title: string;
    nameIcon: keyof typeof Ionicons.glyphMap;
    size: number;
    page: Href<string>;

}

export default function CustomButton({title, nameIcon, size, page}: CustomButtonProps) {
    const router = useRouter();
    return(
        <TouchableOpacity onPress={() => router.push(page)} style={styles.button}>
            <Ionicons name={nameIcon} size={size} />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#007AFF',
        borderRadius: 5,
    },
    text: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 16,
    }
});