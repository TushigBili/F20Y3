import React from 'react';
import { View, Image } from 'react-native';

export const Avatar = () => {
    return (
        <View>
            <Image style={{ height: 50, width: 50 }} source={{ uri: 'https://nestacademy.mn/assets/logo.svg' }} />
        </View>
    )
}