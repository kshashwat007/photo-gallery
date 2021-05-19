import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import SharedAlbumCard from './SharedAlbumCard';

const SharedAlbums = ({ route }) => {
  const { album } = route.params;
  return (
    <ScrollView>
      <SharedAlbumCard album={album} />
    </ScrollView>
  );
};

export default SharedAlbums;
