import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  YellowBox,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={{ height: 100, backgroundColor: 'red' }}/>
        <View style={styles.subcontainer}>
          <View style={{ flex: 1, backgroundColor: 'blue' }}/>
          <View style={{ flex: 3, flexDirection: "column" }}>
            <View style={{height: 120, backgroundColor: 'gray'}}></View>
            <View style={{flex: 1, backgroundColor: 'green'}}></View>
            <View style={{height: 150}}></View>
          </View>
        </View>
        <View style={{ height: 100, backgroundColor: 'yellow' }}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  subcontainer: {
    flex: 1,
    flexDirection: "row",
  }

});

export default App;
