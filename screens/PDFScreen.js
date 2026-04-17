import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function VoiceScreen() {
  return (
    <LinearGradient colors={['#4c6ef5', '#6a4c93']} style={styles.container}>
      <Text style={styles.title}>Voice to Text</Text>

      <View style={styles.circle}>
        <Text style={{ fontSize: 20 }}>🎤</Text>
      </View>

      <Text style={styles.text}>Tap to start Recording</Text>

      <TextInput
        style={styles.input}
        placeholder="Converted text..."
        multiline
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { color: 'white', fontSize: 22, marginBottom: 20 },
  text: { color: 'white', textAlign: 'center', marginBottom: 20 },
  input: {
    backgroundColor: 'white',
    height: 200,
    borderRadius: 10,
    padding: 10,
  },
  circle: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
});