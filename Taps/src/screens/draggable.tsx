import React from 'react';
import {
    Animated,
    StyleSheet,
    View,
    Image,
} from 'react-native';

import { State, PanGestureHandler } from 'react-native-gesture-handler';
import { Avatar } from '../components/avatar'

export const Draggable = () => {
    const styles = StyleSheet.create({
        center: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })

    const translateX = new Animated.Value(0);
    const translateY = new Animated.Value(0);
    const lastOffset = { x: 0, y: 0}

    const dragg = (event: any) => {
        if (event.nativeEvent.state === State.ACTIVE) {
            const translationX = event.nativeEvent.translationX;
            const translationY = event.nativeEvent.translationX;
            translateX.setValue(translationX);
            translateY.setValue(translationY);

        }
    }

    return (
        // draggable component
        <View style={styles.center}>
            <PanGestureHandler onGestureEvent={(event) => dragg(event)}>
                <Animated.View style={{
                    transform: [{ translateX: translateX }, { translateY: translateY }]
                }}>
                    <Image style={{ height: 100, width: 100, borderRadius: 50 }} source={{ uri: 'data:image/png;base64,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' }} />
                </Animated.View>
            </PanGestureHandler>
        </View>
    )
}