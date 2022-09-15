import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

import styles from './Input.style';

function Input(props) {
  //Here the input component is displayed on the screen.
  return (
    <View style={styles[props.theme].container}>
      <Icon name={props.iconName} size={20} color={props.theme==='light'?'#A9A9A9':'#FFF'} />
      <TextInput {...props} placeholderTextColor={props.theme==='light'?'#A9A9A9':'#FFF'} style={styles[props.theme].input} />
    </View>
  );
}

export default Input;
