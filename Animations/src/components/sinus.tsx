import React, { useEffect } from 'react';
import { StyleSheet, Animated, Dimensions, View } from 'react-native'
import { Screen } from './screen';
const { height, width } = Dimensions.get("window")

const Range = (start: number, end: number, size: number) => {
    const range = new Array(size).fill(0)
    return range.map((item, index) => start + index * (end - start) / size)
}

export const Sinus = () => {
    const sinusValue = new Animated.Value(0);

    const translateY = sinusValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, height - 160]
    })

    const deg = sinusValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 2 * Math.PI]
    })

    const translateX = deg.interpolate({
        inputRange: Range(0, 2 * Math.PI, 12),
        outputRange: Range(0, 2 * Math.PI, 12).map((x) => Math.sin(x) * (width / 4))
    })

    useEffect(() => {
        Animated.timing(
            sinusValue,
            {
                toValue: 1,
                duration: 2500,
                delay: 1000,
                useNativeDriver: true
            }
        ).start()
    })

    return (
        <Screen>
            <View style={{flex: 1, alignItems: 'center'}}>
                <Animated.View style={[
                    styles.circle,
                    {
                        transform: [{
                            translateX: translateX
                        }, {
                            translateY
                        }]
                    }
                ]}>

                </Animated.View>
            </View>
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