import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Detail from './screens/Detail';
import Points from './screens/Points';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" screenOptions={{
        cardStyle: {
          backgroundColor: '#f0f0f5'
        }
      }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="points" component={Points} />
        <Stack.Screen name="detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Navigator;
