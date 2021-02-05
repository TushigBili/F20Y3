import * as React from 'react'
import {
    View,
    Button,
    Text,
    Animated
} from 'react-native';
import {useNavigation} from '@react-navigation/native'

export const Settings = () => {
    const navigation = useNavigation()
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgreen'}}>
            <Text style={{fontSize: 30}}>Settings Screen</Text>
            <Button 
                title="Go To Home Page"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};