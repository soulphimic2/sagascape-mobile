import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ReaderScreen from './src/screens/ReaderScreen';

export type RootStackParamList = {
  Home: undefined;
  Reader: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#1a1e2b',
              },
              headerTintColor: '#b89b5e',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
        >
          <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'SagaScape' }}
          />
          <Stack.Screen
              name="Reader"
              component={ReaderScreen}
              options={{ title: 'Völuspá' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}