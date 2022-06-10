import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import {IsMuted} from 'react-native-is-muted';

export default function App() {
  const [muted, setMuted] = useState<Boolean>();

  async function onPressListener() {
    try {
      const isMuted = await IsMuted();
      setMuted(isMuted);
      Alert.alert(`Muted:  ${isMuted ? 'true' : false}`);
    } catch (error) {
      console.error(error);
    }
  }

  let mutedText;

  if (typeof muted === 'undefined') {
    mutedText = 'undefined';
  } else if (muted === true) {
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
