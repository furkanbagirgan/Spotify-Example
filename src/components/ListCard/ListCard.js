import React from 'react';
import {View, Image, Text, TouchableHighlight} from 'react-native';

import styles from './ListCard.style';

const ListCard = ({name, image, handlePress}) => {
  //Here, the incoming name is displayed on the screen together
  //with image, description and vote.
  return (
    <TouchableHighlight
      onPress={handlePress}
      underlayColor='#333'
      style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.imageWrapper}>
          <Image
            source={{uri: image}}
            style={styles.image}
          />
        </View>
        <Text style={styles.name}>
          {name}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default ListCard;
