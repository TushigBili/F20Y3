import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View, Share } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LeftIcon } from '../components';
import { SharedElement } from 'react-native-shared-element'

export const TravelDetail: React.FC<any> = ({ route }) => {
    const { id, title, uri, description, desc } = route.params;
    const navigation = useNavigation();

    const styles = StyleSheet.create({
        container: {
            flex: 1
        }
    })

    return (
        <View style={[styles.container]}>
            <SharedElement id={`image-${id}`} style={[StyleSheet.absoluteFillObject]}>
                <Image style={[StyleSheet.absoluteFillObject, { resizeMode: 'cover' }]} source={{ uri }} />
            </SharedElement>
            <SafeAreaView style={{ flex: 1, zIndex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', height: 50, marginTop: 5 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <LeftIcon height={25} width={25} color={'#FFFFFF'} />
                    </TouchableOpacity>
                    <SharedElement id={`title-${id}`} style={[StyleSheet.absoluteFillObject, {alignItems: 'center'}]}>
                        <Text style={{ color: 'white', fontSize: 30, fontWeight: '700' }}>{title}</Text>
                    </SharedElement>
                </View>
                <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }]}>
                    <SharedElement id={`text-${id}`} style={[StyleSheet.absoluteFillObject]}>
                        <Text style={{ padding: 20, color: 'white', fontSize: 18, fontWeight: '600', textAlign: 'justify' }}>{description}</Text>
                    </SharedElement>
                    <SharedElement id={`text-${id}`} style={[StyleSheet.absoluteFillObject , {marginTop: 50}]}>
                        <Text style={{ padding: 20, color: 'white', fontSize: 18, fontWeight: '600', textAlign: 'justify' }}>{desc}</Text>
                    </SharedElement>
                </View>
            </SafeAreaView>
        </View>
    )
}