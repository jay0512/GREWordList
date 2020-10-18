import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import GREWordListComponent from './screens/WordsScreen';
import PracticeComponent from './screens/PracticeScreen';

const BottomTab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Practice') {
              iconName = 'rocket-outline';
            } else if (route.name === 'Words') {
              iconName = 'logo-buffer';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#0277bd',
          inactiveTintColor: 'gray',
        }}
      >
        <BottomTab.Screen
          name="Practice"
          component={PracticeComponent}
        />
        <BottomTab.Screen
          name="Words"
          component={GREWordListComponent}
        />
      </BottomTab.Navigator>

    </NavigationContainer>
  );
};

export default App;
