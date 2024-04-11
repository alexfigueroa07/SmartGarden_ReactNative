import React from "react";
import { View, Text, StyleSheet, Alert, TextInput, Button } from 'react-native'
import { useState } from 'react';
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';





const CreateTask = () => {
    const [taskName, setTaskName] = useState('');
    const [taskDate, setTaskDate] = useState(new Date());
    const [taskPriority, setTaskPriority] = useState('');
    const [taskContent, setTaskContent] = useState('');
    const navigation = useNavigation();

    //fechaaaaas
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || taskDate;
        setShowDatePicker(false);
        // Conver la fecha a un formato STRNG
        const formattedDate = currentDate.toLocaleDateString();
        setTaskDate(formattedDate);
    };


    const handleSaveTask = () => {
        const taskData = {
            name: taskName,
            date: taskDate,
            priority: taskPriority,
            content: taskContent
        };
        navigation.navigate('Tareas', { newTask: taskData });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crear Tarea</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre de la tarea"
                value={taskName}
                onChangeText={text => setTaskName(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Fecha"
                value={taskDate.toString()} // Convertimos la fecha a una cadena de texto antes de pasarla al componente TextInput
                onChangeText={text => setTaskDate(text)}

            />
            {showDatePicker && (
                <DateTimePicker
                    value={new Date()} // Utiliza una nueva fecha inicial, ya que la selección está manejada por el componente DateTimePicker
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                />
            )}
            <GestureHandlerRootView>
                <TouchableOpacity
                    onPress={() => setShowDatePicker(true)}
                    style={styles.boton}
                >
                    <Text
                        style={styles.btnText}
                    >SELECCIONAR FECHA</Text>
                </TouchableOpacity>
            </GestureHandlerRootView>
            <TextInput
                style={[styles.input, { height: 100 }]}
                placeholder="Contenido"
                multiline={true}
                value={taskContent}
                onChangeText={text => setTaskContent(text)}
            />
            <Picker
                style={styles.inputPicker}
                selectedValue={taskPriority}
                onValueChange={(itemValue) => setTaskPriority(itemValue)}
            >
                <Picker.Item label="Baja" value="baja" />
                <Picker.Item label="Media" value="media" />
                <Picker.Item label="Alta" value="alta" />
                <Picker.Item label="Urgente" value="urgente" />
            </Picker>
            <GestureHandlerRootView>
                <TouchableOpacity
                    onPress={handleSaveTask}
                    style={styles.boton}
                >
                    <Text
                        style={styles.btnText}
                    >GUARDAR NOTA</Text>
                </TouchableOpacity>
            </GestureHandlerRootView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        color: '#10454F',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    formContainer: {
        width: '100%',
    },
    input: {
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        padding: 10,
        width: '100%',
        marginBottom: 10,
    },
    inputPicker: {
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        padding: 10,
        width: '100%',
        marginBottom: 10,
        backgroundColor: 'white',
    },
    boton: {
        backgroundColor: '#BDE038',
        padding: 10,

        margin: 10,
        marginTop: 1,
        width: 200,
        alignSelf: 'center',
        borderRadius: 10
    },
    btnText: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white'
    }
})

export default CreateTask;