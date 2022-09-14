import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Tabs from './Tabs';
import Detail from './../screens/Detail';
import Settings from './../screens/Settings';
import EditProfile from './../screens/EditProfile';
import Theme from './../screens/Theme';

const Stack = createNativeStackNavigator();

//It is the navigation structure that will be displayed when the login is still made.
const ContentStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({route}) => ({
          headerStyle: {backgroundColor: route.params.theme === 'light' ? '#FFF' : '#191414'},
          headerTitleAlign: 'center',
          headerTintColor: route.params.theme === 'light' ? '#A9A9A9' : '#FFF',
          headerTitle: route.params.listName,
          headerShadowVisible: false,
        })}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={({route}) => ({
          headerStyle: {backgroundColor: route.params.theme === 'light' ? '#FFF' : '#191414'},
          headerTitleAlign: 'center',
          headerTintColor: route.params.theme === 'light' ? '#A9A9A9' : '#FFF',
          headerTitle: 'Settings',
          headerShadowVisible: false,
        })}
      />
      <Stack.Screen
        name="Theme"
        component={Theme}
        options={({route}) => ({
          headerStyle: {backgroundColor: route.params.theme === 'light' ? '#FFF' : '#191414'},
          headerTitleAlign: 'center',
          headerTintColor: route.params.theme === 'light' ? '#A9A9A9' : '#FFF',
          headerTitle: 'Select Theme',
          headerShadowVisible: false,
        })}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={({route}) => ({
          headerStyle: {backgroundColor: route.params.theme === 'light' ? '#FFF' : '#191414'},
          headerTitleAlign: 'center',
          headerTintColor: route.params.theme === 'light' ? '#A9A9A9' : '#FFF',
          headerTitle: 'Edit Profile',
          headerShadowVisible: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default ContentStack;
