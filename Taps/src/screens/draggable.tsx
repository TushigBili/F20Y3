import React, { useRef } from 'react';
import {
    Animated,
    StyleSheet,
    View,
} from 'react-native';

import { State, PanGestureHandler } from 'react-native-gesture-handler';
import { Avatar } from '../components/avatar'

export const Home = () => {
    const doubletapRef = useRef(null);
    const styles = StyleSheet.create({
        center: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })

    const translateX = new Animated.Value(0);
    const translateY = new Animated.Value(0);

    const dragg = (event: any) => {
        if(event.nativeEvent.state === State.ACTIVE) {
            const translationX = event.nativeEvent.translationX;
            const translationY = event.nativeEvent.translationX;
            translateX.setValue(translationX);
            translateY.setValue(translationY);

        }
    }

    return (
        // draggable component
        <View style={styles.center}>
            <PanGestureHandler>
                <Animated.View style={{transform:[{translateX: translateX}, {translateY: translateY}]}}>
                    <Avatar />
                </Animated.View>
            </PanGestureHandler>
        </View>
    )
}