import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, handlePress } from 'react-native'

const Boton = ({ btnText, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.boton} onPress={onPress}>
                <Text style={styles.textoBoton}> {btnText}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    boton: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        borderColor: '#cccccc',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: '#333333',
        fontSize: 16,
        fontWeight: 'bold',
    },
});


export default Boton;