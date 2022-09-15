import React from 'react';
import {View, Image, SafeAreaView, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { useHeaderHeight } from '@react-navigation/elements';
import { signOut } from 'firebase/auth';

import styles from './Settings.style';
import Button from '../../components/Button';
import {resetUser} from '../../redux/authSlice';
import {removeItem} from '../../utilities/storage';
import {auth} from '../../utilities/firebase';

const Settings = ({navigation}) => {
  //Necessary states are created.
  const userSession = useSelector(state => state.auth.currentUser);
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();
  const headerHeight = useHeaderHeight();

  //Here is the transition to the theme page.
  const goTheme = () => {
    navigation.navigate('Theme',{theme});
  };

  //Here is the transition to the profile page.
  const goEditProfile = () => {
    navigation.navigate('EditProfile',{theme});
  };

  //Here, user and theme is deleted via context and storage. Then sign out from firebase.
  const logOut = async () => {
    await removeItem('@userData');
    await removeItem('@themeData');
    dispatch(resetUser());
    await signOut(auth);
  };

  //Here, the user picture, logout button and buttons that switch to other pages are printed on the screen.
  return (
    <SafeAreaView
      style={{...styles[theme].container,paddingBottom:headerHeight}}>
      <View style={styles[theme].imageWrapper}>
        <Image
          source={{uri: 'https://picsum.photos/id/1010/150'}}
          style={styles[theme].image}
        />
      </View>
      <Text
        style={styles[theme].email}>
        {userSession.email}
      </Text>
      <View style={styles[theme].buttonContainer}>
        <Button title="Theme" onClick={goTheme} />
        <Button title="Edit profile" onClick={goEditProfile} />
      </View>
      <View style={styles[theme].bottomContainer}>
        <Button title="Log out" onClick={logOut} />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
