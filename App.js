import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import VoiceScreen from './screens/VoiceScreen';
import FlowchartScreen from './screens/FlowchartScreen';
import PDFScreen from './screens/PDFScreen';
import MindMapScreen from './screens/MindMapScreen';
import PPTScreen from './screens/PPTScreen';
import SummaryScreen from './screens/SummaryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Voice" component={VoiceScreen} />
        <Stack.Screen name="Flowchart" component={FlowchartScreen} />
        <Stack.Screen name="PDF" component={PDFScreen} />
        <Stack.Screen name="MindMap" component={MindMapScreen} />
        <Stack.Screen name="PPT" component={PPTScreen} />
        <Stack.Screen name="Summary" component={SummaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}