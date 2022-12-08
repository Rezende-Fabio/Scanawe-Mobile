import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Feather } from '@expo/vector-icons'

export default function ButtonEntar(){
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Entrar</Text>
            <Feather name='arrow-right' size={27} color='#fff'/>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#FF6077",
        borderRadius: 10,
        width: '95%',
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    text: {
        padding: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    }
});