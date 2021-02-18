import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
const { height, width } = Dimensions.get("window");
import { SharedElement } from 'react-native-shared-element'

const data = [
    {
        id: '0',
        title: 'FC Barcelona vs PSG',
        uri: 'https://wallpaperaccess.com/full/1348830.jpg',
        description: `Round of 16 | Leg 1 of 2`,
        score: '1         4',
        desc: `The UEFA Champions League is an annual club football competition organised by the Union of European Football Associations and contested by top-division European clubs, deciding the competition winners through a group and knockout format.`
    },
    {
        id: '1',
        title: 'RB Leipzig vs Liverpool',
        uri: 'https://wallpaperaccess.com/full/1348830.jpg',
        description: `Round of 16 | Leg 1 of 2`,
        score: '0         2',
        desc: `The UEFA Champions League is an annual club football competition organised by the Union of European Football Associations and contested by top-division European clubs, deciding the competition winners through a group and knockout format.`
    },
    {
        id: '2',
        title: 'Sevilla vs Dortmund',
        uri: 'https://wallpaperaccess.com/full/1348830.jpg',
        description: `Round of 16 | Leg 1 of 2`,
        score: '2         3',
        desc: `The UEFA Champions League is an annual club football competition organised by the Union of European Football Associations and contested by top-division European clubs, deciding the competition winners through a group and knockout format.`
    },
    {
        id: '3',
        title: 'Porto vs Juventus',
        uri: 'https://wallpaperaccess.com/full/1348830.jpg',
        description: `Round of 16 | Leg 1 of 2`,
        score: '2         1',
        desc: `The UEFA Champions League is an annual club football competition organised by the Union of European Football Associations and contested by top-division European clubs, deciding the competition winners through a group and knockout format.`
    },
    {
        id: '4',
        title: 'Atletico Madrid vs Chelsea',
        uri: 'https://wallpaperaccess.com/full/1348830.jpg',
        description: `Round of 16 | Leg 1 of 2`,
        score: '0         0',
        desc: `The UEFA Champions League is an annual club football competition organised by the Union of European Football Associations and contested by top-division European clubs, deciding the competition winners through a group and knockout format.`
    },
]


const Story: React.FC<any> = (props) => {
    const { id, title, uri, score } = props;
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.navigate("Detail", { ...props })}>
            <View style={{ width: width - 50, height: 250, borderRadius: 10 }}>
                <SharedElement id={`image-${id}`} style={[StyleSheet.absoluteFill]}>
                    <Image style={[StyleSheet.absoluteFillObject, { borderRadius: 10 }]} source={{ uri }} />
                </SharedElement>
                <SharedElement id={`title-${id}`} style={[StyleSheet.absoluteFillObject]}>
                    <Text style={{ position: 'absolute', top: 0, padding: 10, color: 'white', fontSize: 20, fontWeight: '700' }}>{title}</Text>
                </SharedElement>
                <SharedElement id={`title-${id}`} style={[StyleSheet.absoluteFillObject, {marginTop: 63, marginLeft: '15%'}]}>
                    <Text style={{ position: 'absolute', top: 0, padding: 10, color: 'white', fontSize: 80, fontWeight: '700' }}>{score}</Text>
                </SharedElement>
            </View>
        </TouchableOpacity>
    )
}


export const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: 'black' }}>
            <FlatList
                data={data}
                numColumns={1}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Story {...item} />}
            />
        </SafeAreaView>
    )
}