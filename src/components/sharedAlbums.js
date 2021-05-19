import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import theme from '../../assets/themes/index';
import Avatars from './Avatars';
import SharedAlbumCard from './SharedAlbumCard';
import ImageGallery from './ImageGallery';
import backgroundImages from '../../assets/data/backgroundImages';

const SharedAlbums = ({ route }) => {
  const { album } = route.params;
  return (
    <ScrollView>
      <SharedAlbumCard album={album} />
      <View style={styles.avatarContainer}>
        <Avatars avatars={album.avatars} />
        <Text
          style={styles.numberStyle}
        >{`${album.avatars.length} people`}</Text>
      </View>
      <ImageGallery images={backgroundImages} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.lightGray,
    margin: theme.spacing.m,
    marginVertical: theme.spacing.l,
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.m
  },
  numberStyle: {
    ...theme.textVariants.body3,
    color: theme.colors.gray
  }
});

export default SharedAlbums;
