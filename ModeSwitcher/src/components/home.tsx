import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Switch
} from 'react-native';
import { useColorScheme } from 'react-native-appearance';

export const Home = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const mode = useColorScheme();
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    if (mode === 'dark') {
        setIsEnabled(false)
    } else {
        setIsEnabled(true)
    }

    const styles = StyleSheet.create({
        text: {
            fontSize: 32,
            color: mode === 'dark' ? '#FFFFFF' : '#121212'
        },
        body: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: mode === 'dark' ? '#121212' : '#FFFFFF'
        },
        switch: {
            width: '100%',
            marginLeft: '165%',
            marginTop: '10%'
        },
        mode: {
            flex: 1,
            alignItems: "center",
            width: '100%',
            justifyContent: 'center',
            marginBottom: '15%'
        }
    })

    return (
        <View style={styles.body}>
            <View style={styles.switch}>
                <Switch
                    trackColor={{ false: "#767577", true: "#32CD32" }}
                    thumbColor={"#ffffff"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={styles.mode}>
                <Text style={styles.text}>
                    {`${mode.charAt(0).toUpperCase() + mode.slice(1)} Mode ${mode === 'dark' ? '🌙' : '🌞'}`}
                </Text>
            </View>
        </View>

    )
}