import React from 'react';
import {SafeAreaView,View,Text,Image} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from '@expo/vector-icons/Ionicons';

import styles from './Profile.style';

const Profile = ({navigation}) => {
  //Necessary context data and states are created.
  const userSession = useSelector(state => state.auth.currentUser);
  const theme = useSelector(state => state.theme.theme);

  //Here is the transition to the settings screen.
  const goToSettings = () => {
    navigation.navigate('Settings',{theme});
  };

  //Here, the user's favorite music and settings are listed.
  return (
    <SafeAreaView style={styles[theme].container}>
      <View style={styles[theme].userContainer}>
        <View style={styles[theme].imageWrapper}>
          <Image
              source={{uri: 'https://picsum.photos/id/1010/150'}}
              style={styles[theme].image}
            />
        </View>
        <View style={styles[theme].rightContainer}>
          <Text style={styles[theme].email}>{userSession.email}</Text>
          <Icon name='settings' size={30} color='#1ED760' onPress={goToSettings} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
