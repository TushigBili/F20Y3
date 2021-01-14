import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Input } from './components/text-input'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Simple Forms</Text>
            <Input field={'Your Name'}/>
            <Input field={'Your Age'}/>
            <Input field={'Your Email!'}/>
          </View>
        </View>

      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: '600',
    color: 'black',
  }
});

export default App;
