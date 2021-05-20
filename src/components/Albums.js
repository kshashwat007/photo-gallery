import React, { useLayoutEffect, useRef } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import theme from '../../assets/themes/index';
import albumPage from '../../assets/data/albumPage';
import Card from './Card';
import Seperator from './Seperator';
import Feather from '@expo/vector-icons/Feather';
import BottomSheet from 'reanimated-bottom-sheet';
import BottomSheetContent from './BottomSheet';

const Albums = ({ navigation, navigation: { setOptions } }) => {
  const sheetRef = useRef();

  useLayoutEffect(() => {
    setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={openBottomSheet}>
          <View style={styles.openSheetButton}>
            <Feather name="plus" size={16} color={theme.colors.white} />
          </View>
        </TouchableOpacity>
      )
    });
  });

  const renderBottomSheetContent = () => (
    <BottomSheetContent handleClose={closeBottomSheet} />
  );

  const closeBottomSheet = () => {
    sheetRef.current.snapTo(1);
  };

  const openBottomSheet = () => {
    sheetRef.current.snapTo(0);
  };

  return (
    <>
      <ScrollView>
        <View style={styles.albumContainer}>
          {albumPage.map((item, index) => (
            <View key={index}>
              <Card item={item} navigation={navigation} />
              {/* Seperator added on index 1 */}
              {index === 1 && <Seperator />}
            </View>
          ))}
        </View>
      </ScrollView>

      <BottomSheet
        ref={sheetRef}
        snapPoints={[250, 0]}
        initialSnap={0}
        borderRadius={10}
        renderContent={renderBottomSheetContent}
      />
    </>
  );
};

const styles = StyleSheet.create({
  albumContainer: {
    marginBottom: theme.spacing.l
  },
  openSheetButton: {
    width: 32,
    height: 32,
    backgroundColor: theme.colors.primary,
    marginRight: theme.spacing.m,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Albums;
