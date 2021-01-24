import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image, Animated, Easing } from 'react-native';

export const Movie: React.FC<any> = (props) => {
    const rotateValue = new Animated.Value(0);
    const textScaleValue = new Animated.Value(0)

    useEffect(() => {
        Animated.timing(rotateValue, {
            toValue: 1,
            duration: 1000,
            delay: 500,
            easing: Easing.linear,
            useNativeDriver: true
        }).start()
    }, [])

    useEffect(() => {
        Animated.timing(textScaleValue, {
            toValue: 1,
            duration: 1000,
            delay: 500,
            easing: Easing.ease,
            useNativeDriver: true
        }).start()
    }, [])

    const smallCase = textScaleValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    })

    const rotate = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    return (
        <>
            <View style={styles.container}>
                <Animated.Image style={[styles.image,
                {
                    transform: [{
                        rotate: rotate
                    }]
                }
                ]}
                    source={{ uri: props.source }} />
                <Animated.View style={[
                    styles.subcontainer,
                    {
                        transform: [{
                            scale: smallCase
                        }]
                    }
                ]}>
                    <Text style={styles.titletext}>{props.moviename}</Text>
                    <Image style={{ height: 20, width: 20, marginTop: 15, marginLeft: "90%" }}
                        source={require('./icons/laik.png')} />
                    <View style={{ flex: 1, height: 75, width: "30%", flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 32, color: "pink" }}>{props.rating}</Text>
                        <Text style={{ fontSize: 11, color: "white", marginLeft: 10 }}>Released: Jan 11th</Text>
                    </View>
                </Animated.View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#444444",
        borderRadius: 10,
        height: 150,
        width: "90%",
        marginTop: 15
    },
    subcontainer: {
        flex: 1,
        flexDirection: "column",
        padding: 20
    },
    titletext: {
        color: "white",
        fontSize: 22,
        fontWeight: '500'
    },
    image: {
        height: 150,
        width: "25%",
        borderRadius: 10
    }
})