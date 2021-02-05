import * as React from 'react'
import {
    View,
    Button,
    Text,
    Animated
} from 'react-native';
import {useNavigation} from '@react-navigation/native'

export const Profile = () => {
    const navigation = useNavigation()
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink'}}>
            <Text style={{fontSize: 30}}>Profile Screen</Text>
            <Button 
                title="Go To Notifications"
                onPress={() => navigation.navigate('Notifications')}
            />
            <Button 
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};