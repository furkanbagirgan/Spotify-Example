import React from 'react';
import {View, Image, Text} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

import styles from './MusicCard.style';
import {toggleMusicLiked} from '../../redux/userSlice';
import { useDispatch } from 'react-redux';

const MusicCard = ({music,theme,isLiked}) => {
  const dispatch=useDispatch();

  const toggleLikedMusic=()=>{
    dispatch(toggleMusicLiked(music));
  }
  //Here, the incoming name is displayed on the screen together
  //with image, description and vote.
  return (
      <View style={styles[theme].container}>
        <View style={styles[theme].wrapper}>
          <View style={styles[theme].imageWrapper}>
            <Image
              source={{uri: `https://api.napster.com/imageserver/v2/albums/${music.albumId}/images/70x70.jpg`}}
              style={styles[theme].image}
            />
          </View>
          <View style={styles[theme].detailWrapper}>
            <Text style={styles[theme].name}>
              {music.name}
            </Text>
            <Text
              style={styles[theme].singer}>
              {music.artistName}
            </Text>
          </View>
        </View>
        <Icon name={isLiked ? 'heart' : 'heart-outline'} size={25} color={isLiked ? '#1ED760' : theme==='light'?'#A9A9A9':'#FFF'} onPress={toggleLikedMusic} />
      </View>
  );
};

export default MusicCard;
