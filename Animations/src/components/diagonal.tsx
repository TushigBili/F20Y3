import React, {useEffect} from 'react';
import {StyleSheet, Animated, Dimensions} from 'react-native'
import { Screen } from './screen';
const {height, width} = Dimensions.get("window")

export const Diagonal = () => {
    const diagonalValue = new Animated.Value(0);

    const translateX = diagonalValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, width - 100]
    })

    const translateY = diagonalValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, height - 160]
    })

    useEffect(() => {
        Animated.timing(
            diagonalValue,
            {
                toValue: 1,
                duration: 4000,
                delay: 1000,
                useNativeDriver: true
            }
        ).start()
    }, [])

    return (
        <Screen>
            <Animated.View style={[styles.circle,
            {
                transform: [{
                    translateX
                }, {
                    translateY
                }]
            }
            ]}>
            </Animated.View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    circle: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        backgroundColor: 'yellow'
    }
})