import React, { useEffect } from 'react';
import { Animated, View, StyleSheet, Easing } from 'react-native'

export const Scale = () => {
    const scaleValue = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(scaleValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.ease,
            useNativeDriver: true
        }).start()
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View style={[
                styles.square,
                {
                    transform: [{
                        scale: scaleValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 2]
                        })
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