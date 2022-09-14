import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import {useSelector} from 'react-redux';

import Home from './../screens/Home';
import Search from './../screens/Search';
import Profile from './../screens/Profile';

const Tab = createBottomTabNavigator();

//Here, the tabs required for the bottom navigation are created and the necessary settings are made.
const Tabs = () => {
  //The theme information is accessed with the useSelector hook.
  const theme = useSelector(state => state.theme.theme);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        //Here the tabBar icon is set according to the page name.
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          const iconSize=35;
          if (route.name === 'Home') {
            iconName = focused
                ? 'home'
                : 'home-outline'
          } else if (route.name === 'Search') {
            iconName = focused
                ? 'search'
                : 'search-outline'
          } else if (route.name === 'Profile') {
            iconName = focused
                ? 'person'
                : 'person-outline'
          }

          return <Ionicons name={iconName} size={iconSize} color={color} />;
        },
        headerStyle: {backgroundColor: theme === 'light' ? '#FFF' : '#191414'},
        headerTintColor: theme === 'light' ? '#A9A9A9' : '#FFF',
        headerTitleAlign: 'center',
        tabBarActiveTintColor: theme === 'light' ? '#1DB954' : '#FFF',
        tabBarInactiveTintColor: theme === 'light' ? '#333' : '#FFF',
        tabBarActiveBackgroundColor: theme === 'light' ? '#A9A9A9' : '#333',
        tabBarInactiveBackgroundColor: theme === 'light' ? '#A9A9A9' : '#333',
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
