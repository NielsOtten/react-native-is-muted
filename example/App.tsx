import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { isMuted } from 'react-native-is-muted';

export default function App() {
  const [muted, setMuted] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  const checkMuted = async () => {
    setError(null);
    try {
      const result = await isMuted();
      setMuted(result);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setMuted(null);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>react-native-is-muted</Text>
        <Button title="Check mute state" onPress={checkMuted} />
        {muted !== null && (
          <Text style={styles.result}>
            Device is {muted ? 'muted 🔇' : 'not muted 🔊'}
          </Text>
        )}
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, gap: 24 },
  header: { fontSize: 24, fontWeight: '600' },
  result: { fontSize: 18 },
  error: { fontSize: 14, color: 'red', textAlign: 'center' },
});
