import React, {useEffect} from 'react';
import {StyleSheet, Animated, Dimensions} from 'react-native'
import { Screen } from './screen';
const {height, width} = Dimensions.get("window")

export const Horizontal = () => {
    const horizontalValue = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(
            horizontalValue,
            {
                toValue: width - 100,
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
                    translateX: horizontalValue
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