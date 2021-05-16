import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Albums from '../components/Albums';
import SharedAlbums from '../components/sharedAlbums';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Albums"
        component={Albums}
        options={{ headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="Shared Albums"
        component={SharedAlbums}
        options={{ headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
