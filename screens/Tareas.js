import React from "react";
import { View, ScrollView, Text, StyleSheet, Alert, params } from 'react-native'
import Boton from "../components/Boton";
import { useRoute, useNavigation } from "@react-navigation/native";

const Tareas = () => {
    const route = useRoute();

    const { newTask } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Mis Tareas</Text>
            <View style={styles.taskContainer}>
                <Text style={styles.taskText}>{newTask.name}</Text>
                <Text style={styles.taskText}>{newTask.date}</Text>
                <Text style={styles.taskText}>Prioridad: {newTask.priority}</Text>
                <Text style={styles.taskText}>{newTask.content}</Text>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        color: '#10454F',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    taskContainer: {
        backgroundColor: '#F5F5F5',
        padding: 20,
        borderRadius: 10,
        borderWidth: 0.2,
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    taskText: {
        fontSize: 16,
        marginBottom: 10,
    },
});

export default Tareas;