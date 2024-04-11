import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

const Profile = () => {
    const [loginData, setLoginData] = useState({ name: '', pass: '' });
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState(null); // Nuevo estado para almacenar los datos del usuario

    const handleLogin = async () => {
        setLoading(true);
        try {
            const response = await axios.post('http://10.0.2.2:3000/api/usuarios/', loginData);
            setUserData(response.data); 
        } catch (error) {
            console.error('Error al iniciar sesión:', error.response.data);
            Alert.alert('Error', 'Credenciales incorrectas. Verifica tus datos e intenta nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            {/* Si userData está definido, muestra los datos del usuario */}
            {userData ? (
                <View style={styles.userDataContainer}>
                    <Text style={styles.userData}>Nombre: {userData.name}</Text>
                    <Text style={styles.userData}>Email: {userData.email}</Text>
                    {/* Agrega aquí más campos para mostrar otros datos del usuario si es necesario */}
                </View>
            ) : (
                /* Si userData es nulo, muestra el formulario de inicio de sesión */
                <View style={styles.loginContainer}>
                    <Text style={styles.title}>Iniciar Sesión</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="name"
                        value={loginData.name}
                        onChangeText={text => setLoginData({ ...loginData, name: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="pass"
                        secureTextEntry={true}
                        value={loginData.pass}
                        onChangeText={text => setLoginData({ ...loginData, pass: text })}
                    />
                    <TouchableOpacity onPress={handleLogin} style={styles.loginButton} disabled={loading}>
                        <Text style={styles.loginButtonText}>{loading ? "Cargando..." : "Iniciar Sesión"}</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginContainer: {
        width: '80%',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        color: '#10454F',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#10454F',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: '100%',
        borderRadius: 5,
    },
    loginButton: {
        backgroundColor: '#10454F',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    userDataContainer: {
        alignItems: 'center',
    },
    userData: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default Profile;
