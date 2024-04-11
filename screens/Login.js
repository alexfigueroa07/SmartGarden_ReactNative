import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://127.0.0.1:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const user = response.json(); // Espera a que se resuelva la promesa JSON
                console.log('Inicio de sesión exitoso:', user);
            } else {
                console.error('Error ennn el inicio de sesión:', response.status);
            }
        } catch (error) {
            console.log(username)
            console.log(password)
            console.error('Errorrr en el inicio de sesión:', error);
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>LOG-IN</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
            {/* 
                Aquí puedes agregar un botón para navegar a la pantalla de registro
                <Button title="Create an account" onPress={handleCreateAccount} />
            */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
    },
});

export default Login;
