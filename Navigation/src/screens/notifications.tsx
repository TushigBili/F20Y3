import * as React from 'react'
import {
    View,
    Button,
    Text,
    Animated
} from 'react-native';
import {useNavigation} from '@react-navigation/native'

export const Notifications = () => {
    const navigation = useNavigation()
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue'}}>
            <Text style={{fontSize: 30}}>Notifications Screen</Text>
            <Button 
                title="Go To Settings"
                onPress={() => navigation.navigate('Settings')}
            />
            <Button 
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};