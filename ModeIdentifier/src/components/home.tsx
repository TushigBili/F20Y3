import React from 'react';
import {
    Text,
    View, StyleSheet
} from 'react-native';
import { useColorScheme } from 'react-native-appearance';

export const Home = () => {
    const mode = useColorScheme();

    const styles = StyleSheet.create({
        text: {
            fontSize: 32,
            color: mode === 'dark' ? 'blue' : 'orange'
        }
    })

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={styles.text}>
                {`You selected ${mode === 'dark' ? '🌙' : '🌞'} mode`}
            </Text>
        </View>

    )
}