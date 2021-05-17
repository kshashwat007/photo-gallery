import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import theme from '../../assets/themes';

const Avatars = ({ avatars }) => {
  return (
    <View>
      {avatars.map((item) => (
        <Image key={item.id} source={item.image} style={[styles.avatarStyle]} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  avatarStyle: {
    resizeMode: 'cover',
    width: theme.imageHeight.xs,
    height: theme.imageHeight.xs,
    borderRadius: theme.imageHeight.xs / 2,
    borderWidth: 1,
    borderColor: theme.colors.white
  }
});

export default Avatars;
