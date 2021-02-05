import * as React from 'react'
import {
    View,
    Button,
    Text,
    Animated
} from 'react-native';
import {useNavigation} from '@react-navigation/native'

export const Home = () => {
    const navigation = useNavigation()
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 30}}>Home Screen</Text>
            <Button 
                title="Go To Profile"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    );
};