import React, { useEffect, useState, useRef } from 'react';
import { FlatList, SafeAreaView, StatusBar, Text, StyleSheet, View, Touchable, TouchableOpacity } from 'react-native'
import firestore from '@react-native-firebase/firestore'

type Contact = {
    id: string,
    name: string,
    header: boolean
}

type Header = {
    id: string,
    name: string,
    header: boolean,
    index: number
}

const renderContact = ({ index, item }: any) =>
    <View style={item.header ? styles.contactheader : styles.contact}>
        <Text style={styles.ctext}>{item.name}</Text>
    </View>


export const Contacts = () => {
    const [data, setData] = useState<Contact[]>([]);
    const contactList = useRef<FlatList>(null);
    const [headers, setHeaders] = useState<Header[]>([])

    useEffect(() => {
        const unsubscribe = firestore().collection('contacts').orderBy('name', 'asc').onSnapshot(querySnapshot => {
                const contacts: any = querySnapshot.docs.map((snapshot) => ({ id: snapshot.id, ...snapshot.data() })).map((contact: any) => ({ ...contact, header: false }))
                const groups = contacts.reduce((acc: any, curr: Contact) => {
                    acc[curr.name[0]] = acc[curr.name[0]] || [0];
                    acc[curr.name[0]].push(curr)
                    return acc
                })
                const flatten = Object.keys(groups).map((key, index) => {
                    return [{id: index.toString(), header: true, name: key}, ...groups[key]]
                }).reduce((acc, curr) => [...acc, ...curr], [])
                setHeaders(flatten.map((item, index) => ({...item, index: index})).filter((item) => item.header))
                setData(flatten);
            })

        return () => unsubscribe()
    }, [])

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <Text style={styles.header}>Contacts</Text>
                <TouchableOpacity onPress={() => {
                    contactList.current!.scrollToIndex({animated: true, index: 4})
                }}><Text style={{color: 'blue', }}>B</Text></TouchableOpacity>
                <FlatList
                    data={data}
                    renderItem={renderContact}
                    keyExtractor={(item) => item.id}
                    stickyHeaderIndices={headers.map((item) => item.index)}
                />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 40,
        fontWeight: "700",
    },
    contactheader: {
        backgroundColor: '#DDDDDD'
    },
    contact: {
        borderColor: 'white',
        borderBottomColor: '#AAAAAA',
        borderWidth: 1,
    },
    ctext: {
        fontSize: 30,
    }
})