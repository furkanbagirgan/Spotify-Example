import React, {useState, useCallback, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import { signInWithEmailAndPassword } from 'firebase/auth';

import AuthStack from './AuthStack';
import ContentStack from './ContentStack';
import {setCurrentUser} from '../redux/authSlice';
import {setTheme} from '../redux/themeSlice';
import { auth } from '../utilities/firebase';
import { showLoginError } from '../utilities/auth';
import {getItem} from '../utilities/storage';

const Navigation = () => {
  //setTheme and setCurrentUser function is accessed with the useDispatch hook.
  const [userSession,setUserSession]=useState(null);
  const dispatch = useDispatch();

  //It makes the getUserData function run when the application is first launched.
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setUserSession(!!user);
    });
  },[]);

  //It makes the getUserData function run when the application is first launched.
  useEffect(()=>{
    getUserData();
  },[getUserData]);

  //Checking if there is any user data saved in the storage. If there is, this user information is saved in redux.
  const getUserData = useCallback(async () => {
    try {
      const user = await getItem('@userData');
      const theme = await getItem('@themeData');
      if(user !== 0 || theme !== 0){
        await signInWithEmailAndPassword(auth,user.email,user.password);
        dispatch(setCurrentUser(user));
        dispatch(setTheme(theme));
      }
    } catch (error) {
      showLoginError(error.code);
    }
  }, [dispatch]);

  //Here, the appropriate navigation structure is displayed on the screen according to the user input status.
  return (
    <NavigationContainer>
      {userSession ? <ContentStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
