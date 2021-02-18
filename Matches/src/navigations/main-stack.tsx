import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { Home, TravelDetail } from '../screens';
import { ScaleFromCenterAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window")

const Stack = createSharedElementStackNavigator();

const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01
    }
}

const options = {
    headerBackTitleVisible: false,
    transitionSpec: {
        open: config,
        close: config
    },
    cardStyleInterpolator: ({ current: { progress } }) => {
        return {
            cardStyle: {
                opacity: progress,
                // transform: [{
                //     translateY: progress.interpolate({
                //         inputRange: [0, 1],
                //         outputRange: [height, 0]
                //     })
                // }]
            }
        };
    }
};

export const StackNavigation: React.FC<any> = () => {

    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
                name="Detail"
                component={TravelDetail}
                // options={options}
                sharedElementsConfig={(route) => {
                    const { id } = route.params;
                    return [
                        {
                            id: `image-${id}`,
                            animation: 'move',
                        },
                        {
                            id: `text-${id}`,
                            animation: 'move',
                        },
                        {
                            id: `title-${id}`,
                            animation: 'fade',
                        }
                    ]
                }}
            />
        </Stack.Navigator>
    )
}
