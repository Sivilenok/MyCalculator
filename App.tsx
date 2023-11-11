import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import CalculationScreen from './src/screens/CalculationScreen';
import HistoryScreen from './src/screens/HistoryScreen';

const Stack = createStackNavigator();

function App() {
  return (
    // Stack.Navigator создает контейнер для всех экранов стека навигации
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculation" component={CalculationScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
