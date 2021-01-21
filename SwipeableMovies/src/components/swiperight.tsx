import React from 'react';
import {
    View,
    StyleSheet,
    Animated,
} from 'react-native'

export const RightActions = (process: any, dragX: any) => {
    const trans = dragX.interpolate({
        inputRange: [-80, 0],
        outputRange: [-30, 0]
    })

    return (
        <View
            style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: "center", height: 150, width: '100%', marginTop: 15 }}>
            <Animated.Text
                style={[
                    styles.rightAction,
                    { transform: [{ translateX: trans }] }
                ]}>
                Delete
                </Animated.Text>
        </View>
    )
}

const styles = StyleSheet.create({
    rightAction: {
        color: 'white',
        paddingHorizontal: 10,
        fontWeight: '600',
        fontSize: 24,
    }
})