import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View, Alert } from "react-native";

const AlertButtons = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  return (
    <View style={styles.container}>
      <View>
        <TouchableHighlight onPress={onPress}>
          <View style={styles.button}>
            <Text>Press Here</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.countContainer}>
          <Text style={styles.countText}>
            {count ? count : null}
          </Text>
        </View>
      </View>
      <View>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => Alert.alert('Pressed!')}>
          <View style={styles.button}>
            <Text>Press Here</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignContent: 'center',
    marginTop: 300
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  countText: {
    color: "#FF00FF"
  }
});

export default AlertButtons;