import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Animated,
} from 'react-native'

export const LeftActions = (process: any, dragX: any) => {
  const trans = dragX.interpolate({
    inputRange: [0, 80],
    outputRange: [0, 30]
  })

  return (
    <View style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center', alignItems: "center", height: 150, width: '100%', marginTop: 15 }}>
      <Animated.Text style={[styles.leftAction, {transform: [{translateX: trans}]}]}>
        Archive
        </Animated.Text>
    </View>
  )
}

const styles = StyleSheet.create({
  leftAction: {
    color: 'white', 
    paddingHorizontal: 10, 
    fontWeight: '600', 
    fontSize: 24
  }
})