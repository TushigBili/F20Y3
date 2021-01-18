import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  SafeAreaView
} from 'react-native';

const App = () => {
  const [value, onChangeText] = React.useState('');

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={{fontSize: 16}}>Hello World</Text>
        <TextInput style={styles.input} onChangeText={text => onChangeText(text)} value={value} />
        <Button
          title="Submit"
          onPress={() => Alert.alert('Simple Button pressed')}
          color={'purple'}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  input: {
    height: 20,
    width: 200,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 15,
    marginTop: 15,
    marginBottom: 5
  },
  button: {
    backgroundColor: 'white', 
    color: 'purple', 
    width: 200, 
    height: 40
  }
});

export default App;
