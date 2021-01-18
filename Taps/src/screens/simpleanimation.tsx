import React, { useRef, useEffect } from 'react';
import {
    Animated,
    StyleSheet,
    View,
} from 'react-native';

import { Avatar } from '../components/avatar'

export const Home = () => {
    const styles = StyleSheet.create({
        center: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
    const translateX = new Animated.Value(50);

    useEffect(() => {
        let x = 0;
        setInterval(() => {
            if (x < 150) {
                translateX.setValue(x);
                x = x + 1
            }
        })
    })

    return (
        // simple animation

        <View style={styles.center}>>
            <Animated.View style={{
                transform: [
                    { translateX: translateX }
                ]
            }}>
                <Avatar />
            </Animated.View>
        </View>

    )
}