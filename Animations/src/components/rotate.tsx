import React, { useEffect } from 'react';
import { Animated, View, StyleSheet, Easing } from 'react-native'

export const Rotate = () => {
    const rotateValue = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(rotateValue, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start()
    }, [])

    const rotate = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View style={[
                styles.square,
                {
                    transform: [{
                        rotate: rotate
                    }]
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
    }
})