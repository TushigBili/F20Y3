import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export const Movie: React.FC<any> = (props) => {
    return (
        <>
            <View style={styles.container}>
                <Image style={{ height: 150, width: "25%", borderRadius: 10 }}
                    source={{ uri: props.source }} />
                <View style={styles.subcontainer}>
                    <Text style={styles.titletext}>{props.moviename}</Text>
                    <Image style={{height: 20, width: 20, marginTop: 15, marginLeft: "90%"}} 
                    source={require('./icons/laik.png')}/>
                    <View style={{flex: 1, height: 75, width: "30%", flexDirection: "row", alignItems: "center"}}>
                        <Text style={{fontSize: 32, color: "pink"}}>{props.rating}</Text>
                        <Text style={{fontSize: 11, color: "white", marginLeft: 10}}>Released: Jan 11th</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#444444",
        borderRadius: 10,
        height: 150,
        width: "90%",
        marginTop: 15
    },
    subcontainer: {
        flex: 1,
        flexDirection: "column",
        padding: 20
    },
    titletext: {
        color: "white",
        fontSize: 22,
        fontWeight: '500'
    }
})