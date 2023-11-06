import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { isMuted } from 'react-native-is-muted';

export default function App() {
  const [muted, setMuted] = useState<Boolean>();

  async function onPressListener() {
    try {
      const isDeviceMuted = await isMuted();
      setMuted(isDeviceMuted);
      Alert.alert(`Muted:  ${isDeviceMuted ? 'true' : false}`);
    } catch (error) {
      console.error(error);
    }
  }

  let mutedText = 'undefined';

  if (muted === true) {
    mutedText = 'muted';
  } else {
    mutedText = 'not muted';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>IsMuted example</Text>
      <Text style={styles.instructions}>Muted: {mutedText}</Text>
      <Button onPress={onPressListener} title="Check muted" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
