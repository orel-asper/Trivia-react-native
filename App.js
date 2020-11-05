import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen'
import ScoreScreen from './src/screens/ScoreScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'TRIVIA',
            headerStyle: { backgroundColor: '#dabfff', borderRadius: 20 },
            headerTitleStyle: { textAlign: 'center', fontSize: 30, fontWeight: "bold", fontFamily: 'cursive' }
          }} />
        <Stack.Screen
          name="ScoreScreen"
          component={ScoreScreen}
          options={{
            title: 'SCORE',
            headerStyle: { backgroundColor: '#dabfff', borderRadius: 20 },
            headerTitleStyle: { textAlign: 'center', fontSize: 30, fontWeight: "bold", fontFamily: 'cursive' }
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;