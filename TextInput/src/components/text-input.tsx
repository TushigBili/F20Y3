import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
} from 'react-native';

export const Input: React.FC<any> = (props) => {
    const [value, onChangeText] = React.useState('');

    return (
        <View style={styles.container}>
            <Text style={{ color: "gray", fontSize: 18, marginBottom: 10 }}>{props.field}</Text>
            <TextInput style={styles.input} onChangeText={text => onChangeText(text)} value={value}>
            </TextInput>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginBottom: 15
    },
    input: {
        height: 50,
        width: 375,
        borderRadius: 10,
        borderColor: '#00FF00',
        borderWidth: 1,
        padding: 15
    }
});
