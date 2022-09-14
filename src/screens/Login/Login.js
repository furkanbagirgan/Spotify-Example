import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector,useDispatch} from 'react-redux';
import { signInWithEmailAndPassword } from 'firebase/auth';

import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {setCurrentUser} from '../../redux/authSlice';
import {setTheme} from '../../redux/themeSlice';
import {auth} from './../../firebase';

const Login = ({navigation}) => {
  //Necessary states are created.
  const theme = useSelector(state => state.theme.theme);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  //By checking the email from the server, user data and the first theme value are saved to redux and storage.
  const login = async () => {
    setLoading(true);
    try {
      const user={
        email,
        password,
        userName:''
      }
      await signInWithEmailAndPassword(auth,email,password);
      await AsyncStorage.setItem('@userData', JSON.stringify(user));
      await AsyncStorage.setItem('@themeData', JSON.stringify('light'));
      dispatch(setCurrentUser(user));
      dispatch(setTheme('light'));
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };

  //Here is the transition to the sign up page.
  const goToSignup = () => {
    navigation.navigate('Signup');
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
      <Button title="Login" loading={loading} onClick={login} />
      <Text style={styles.signupText}>Don't have an account?</Text>
      <Button title="Sign Up" onClick={goToSignup} />
    </SafeAreaView>
  );
};

export default Login;
