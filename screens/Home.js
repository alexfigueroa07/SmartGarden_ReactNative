import React from "react";
import { View, Text, StyleSheet, } from 'react-native'
import Boton from "../components/Boton";
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/loading/index";


const Home = () => {


    const navigation = useNavigation();

    return (


        <View style={styles.container}>
            <Loading loading={false}>
                <Text style={styles.title}>WELCOME</Text>
                <Text style={styles.title}>HuertoUTC</Text>

                <GestureHandlerRootView>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}
                        style={styles.boton}
                    >
                        <Text
                            style={styles.btnText}
                        >
                            LOGIN
                        </Text>
                    </TouchableOpacity>
                </GestureHandlerRootView>

            </Loading>
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
    boton: {
        backgroundColor: '#BDE038',
        padding: 10,
        marginTop: 10,
        width: 200,
        alignSelf: 'center',
        borderRadius: 10
    },
    btnText: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white'
    }
});

export default Home;
