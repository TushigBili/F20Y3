import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Switch
} from 'react-native';
import { useTheme } from '../providers/themeProvider';

export const Home = () => {
    const { isDark, colors, switchTheme } = useTheme()

    const styles = StyleSheet.create({
        text: {
            fontSize: 32,
            color: colors.text
        },
        body: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: colors.background
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
                    value={isDark}
                    onValueChange={switchTheme}
                />
            </View>
            <View style={styles.mode}>
                <Text style={styles.text}>
                    {`${isDark ? 'Dark' : 'Light'} mode ${isDark ? '🌙' : '🌞'}`}
                </Text>
            </View>
        </View>

    )
}