import React, { useEffect } from 'react';
import { Animated, View, StyleSheet, Easing, LayoutAnimation } from 'react-native'

export const Flip = () => {
    const flipValue = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(flipValue, {
            toValue: 180,
            duration: 2000,
            useNativeDriver: true
        }).start()
    })

    const frontFlip = flipValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '720deg']
    })

    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View style={[
                styles.square,
                {
                    transform: [
                        { rotateY: frontFlip }
                    ]
                }
            ]}>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    square: {
        height: 100,
        width: 100,
        borderRadius: 20,
        backgroundColor: 'blue',
        borderColor: 'blue'
    },
    squaretwo: {
        height: 100,
        width: 100,
        borderRadius: 20,
        backgroundColor: 'red',
        borderColor: 'red'
    }
})