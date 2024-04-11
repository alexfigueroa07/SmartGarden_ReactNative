import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
function Loading({ loading, children }) {
    if (loading) {
        return (
            <View Style={Style.container}>
                <ActivityIndicator size='large' color='yellow' />
            </View>
        )
    }
    return children;
}
export default Loading

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green'

    }
})