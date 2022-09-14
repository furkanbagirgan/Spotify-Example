import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector,useDispatch} from 'react-redux';
import {createUserWithEmailAndPassword} from 'firebase/auth';

import styles from './Signup.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {setCurrentUser} from '../../redux/authSlice';
import {setTheme} from '../../redux/themeSlice';
import { auth } from './../../firebase';

const Signup = () => {
  //Necessary states are created.
  const theme = useSelector(state => state.theme.theme);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();

  //user and the first theme value are saved to redux and storage.
  const signup = async () => {
    setLoading(true);
    try {
      const user = {
        email,
        password,
        userName,
      };
      await createUserWithEmailAndPassword(auth,email,password);
      await AsyncStorage.setItem('@userData', JSON.stringify(user));
      await AsyncStorage.setItem('@themeData', JSON.stringify('light'));
      dispatch(setCurrentUser(user));
      dispatch(setTheme('light'));
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };

  //Here, inputs for user data and button are pressed to the screen.
  return (
    <SafeAreaView style={theme === 'light' ? styles.lightContainer : styles.darkContainer}>
      <Text style={styles.header}>Spotify</Text>
      <Input
        placeholder="Email"
        placeholderTextColor="#A9A9A9"
        value={email}
        iconName="email"
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Input
        placeholder="Password"
        placeholderTextColor="#A9A9A9"
        value={password}
        iconName="lock"
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Input
        placeholder="Repeat Password"
        placeholderTextColor="#A9A9A9"
        value={repeatPassword}
        iconName="lock"
        onChangeText={setRepeatPassword}
        secureTextEntry={true}
      />
      <Input
        placeholder="User Name"
        placeholderTextColor="#A9A9A9"
        value={userName}
        iconName="at"
        onChangeText={setUserName}
      />
      <Button title="Sign Up" loading={loading} onClick={signup} />
    </SafeAreaView>
  );
};

export default Signup;
