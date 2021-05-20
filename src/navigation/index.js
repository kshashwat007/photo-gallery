import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Albums from '../components/Albums';
import ImageGallery from '../components/sharedAlbums';
import SharedAlbums from '../components/sharedAlbums';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Albums"
        component={Albums}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#1F2121'
          }
        }}
      />
      <Stack.Screen
        name="Shared Albums"
        component={SharedAlbums}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#1F2121'
          }
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
