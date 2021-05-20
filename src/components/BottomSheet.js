import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import theme from '../../assets/themes';

const BottomSheet = ({ handleClose }) => {
  return (
    <View style={styles.ContentWrapper}>
      <TouchableOpacity
        onPress={() => alert('Created Album')}
        style={styles.buttonLarge}
      >
        <Text style={styles.buttonTitle}>Create a new album</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleClose} style={styles.buttonSmall}>
        <Text style={styles.buttonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ContentWrapper: {
    backgroundColor: theme.colors.woodSmokeBlack,
    padding: theme.spacing.m,
    height: 250
  },
  buttonLarge: {
    marginTop: theme.spacing.sm,
    marginHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.l,
    backgroundColor: theme.colors.altBlack,
    borderRadius: theme.borderRadius.m,
    alignItems: 'center',
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 8
  },
  buttonTitle: {
    ...theme.textVariants.h2,
    color: theme.colors.white
  },
  buttonSmall: {
    marginTop: theme.spacing.m,
    marginHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.m,
    backgroundColor: theme.colors.altBlack,
    borderRadius: theme.borderRadius.m,
    alignItems: 'center',
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 8
  }
});

export default BottomSheet;
