import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import Login from './../screens/Login';
import Signup from './../screens/Signup';

const Stack = createNativeStackNavigator();

//It is the navigation structure that will be shown in case there is no entry yet.
const AuthStack = () => {
  //The theme information is accessed with the useSelector hook.
  const theme = useSelector(state => state.theme.theme);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerStyle: {backgroundColor: theme === 'light' ? '#FFF' : '#191414'},
          headerTintColor: theme === 'light' ? '#A9A9A9' : '#FFF',
          headerTitle: '',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
