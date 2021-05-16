import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable
} from 'react-native';

const Card = ({ item }) => {
  return (
    <ImageBackground source={item.background} style={styles.imageBackground}>
      <Pressable>
        <View style={styles.imageContentContainer}>
          <View>
            <Text style={styles.imageTitle}>{item.title}</Text>
            <Text
              style={styles.imageSubtitle}
            >{`Created by ${item.user}`}</Text>
          </View>
        </View>
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {},
  imageContentContainer: {},
  imageTitle: {},
  imageSubtitle: {}
});

export default Card;
