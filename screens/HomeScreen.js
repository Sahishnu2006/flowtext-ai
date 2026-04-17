import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const features = [
    { name: "Voice to Text", icon: "mic", screen: "Voice" },
    { name: "Text to Flowchart", icon: "git-network", screen: "Flowchart" },
    { name: "Text to PDF", icon: "document", screen: "PDF" },
    { name: "Text to Mind Map", icon: "share-social", screen: "MindMap" },
    { name: "Text to PPT", icon: "easel", screen: "PPT" },
    { name: "Text to Summary", icon: "text", screen: "Summary" },
  ];

  return (
    <LinearGradient colors={['#4c6ef5', '#6a4c93']} style={styles.container}>
      <Text style={styles.title}>FlowText AI</Text>
      <Text style={styles.subtitle}>AI Text conversion Tool kit</Text>

      {features.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => navigation.navigate(item.screen)}
        >
          <Ionicons name={item.icon} size={24} color="white" />
          <Text style={styles.cardText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    marginTop: 50,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5f7cff',
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
  },
  cardText: {
    color: 'white',
    marginLeft: 15,
  },
});