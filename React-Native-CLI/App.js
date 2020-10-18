import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import GREWordListComponent from './screens/WordsScreen';
import PracticeComponent from './screens/PracticeScreen';
import WordDetailsScreenComponent from './screens/WordDetailsScreen';

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
          component={PracticeScreenScreen}
        />
        <BottomTab.Screen
          name="Words"
          component={WordsScreenScreen}
        />
      </BottomTab.Navigator>

    </NavigationContainer>
  );
};

const Practice = createStackNavigator();

function PracticeScreenScreen() {
  return (
    <Practice.Navigator>
      <Practice.Screen name="Practice" component={PracticeComponent} />
      <Practice.Screen name="Details" title="Learn More" component={WordDetailsScreenComponent} />
    </Practice.Navigator>
  );
}

const Words = createStackNavigator();

function WordsScreenScreen() {
  return (
    <Words.Navigator>
      <Words.Screen name="GRE Words List" component={GREWordListComponent} />
      <Words.Screen name="Details" title="Learn More" component={WordDetailsScreenComponent} />
    </Words.Navigator>
  );
}

export default App;
