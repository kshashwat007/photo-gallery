import React from 'react';
import { Pressable, Text, View } from 'react-native';

const Albums = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Albums Page</Text>
      <Pressable onPress={() => navigation.navigate('Shared Albums')}>
        <Text>Shared Albums</Text>
      </Pressable>
    </View>
  );
};

export default Albums;
