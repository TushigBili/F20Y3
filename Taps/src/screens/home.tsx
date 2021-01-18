import React, { useRef } from 'react';
import {
    StyleSheet,
    View,
    Alert
} from 'react-native';

import { TapGestureHandler, State, LongPressGestureHandler, } from 'react-native-gesture-handler';
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
    
    const onSingleTap = (events: any) => {
        if (events.nativeEvent.state === State.ACTIVE) {
            Alert.alert('You tapped me')
        }
    }
    const onDoubleTap = (events: any) => {
        if (events.nativeEvent.state === State.ACTIVE) {
            Alert.alert('You double tapped me')
        }
    }
    const onLongTap = (events: any) => {
        if (events.nativeEvent.state === State.ACTIVE) {
            Alert.alert('You long tapped me')
        }
    }

    return (
        // single tap, long tap, double tap,

        <View style={styles.center}>
            <LongPressGestureHandler onHandlerStateChange={onLongTap} minDurationMs={4000}>
                <TapGestureHandler onHandlerStateChange={onSingleTap} waitFor={doubletapRef}>
                    <TapGestureHandler onHandlerStateChange={onDoubleTap} ref={doubletapRef} numberOfTaps={2}>
                        <View>
                            <Avatar />
                        </View>
                    </TapGestureHandler>
                </TapGestureHandler>
            </LongPressGestureHandler>
        </View>
    )
}