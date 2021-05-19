import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import theme from '../../assets/themes/index';

const SharedAlbumCard = ({ album }) => {
  return (
    <ImageBackground
      source={album.background}
      style={styles.imageBackground}
    ></ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    resizeMode: 'cover',
    overflow: 'hidden',
    height: theme.imageHeight.m,
    margin: theme.spacing.m,
    paddingHorizontal: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    justifyContent: 'center'
  }
});

export default SharedAlbumCard;
