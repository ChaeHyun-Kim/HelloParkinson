import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { list, statistics, progress, profile } from '../screens/TabScreens';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TabIcon = ({ name, size, color }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Settings"
      tabBarOptions={{
        labelPosition: 'beside-icon',
        showLabel: false,
        style: {
          backgroundColor: '#59b7f0',
          borderTopColor: '#ffffff',
          borderTopWidth: 2,
        },
        activeTintColor: '#ffffff',
        inactiveTintColor: '#cfcfcf',
      }}

      screenOptions={({ route }) => ({
        tabBarIcon: props => {
          let name = '';
          if (route.name === 'Mail') name = 'email';
          else if (route.name === 'Meet') name = 'video';
          else name = 'settings';
          return TabIcon({ ...props, name });
        },
      })}

    >
      <Tab.Screen
        name="list"
        component={list}
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: props =>
            TabIcon({
              ...props,
              name: props.focused ? 'email' : 'email-outline',
            }),
        }}
      />
      <Tab.Screen
        name="statistics"
        component={statistics}
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: props =>
            TabIcon({
              ...props,
              name: props.focused ? 'email' : 'email-outline',
            }),
        }}
      />
      <Tab.Screen
        name="progress"
        component={progress}
        options={{
          tabBarIcon: props =>
            TabIcon({
              ...props,
              name: props.focused ? 'settings' : 'settings-outline',
            }),
        }}
      />
      <Tab.Screen
        name="profile"
        component={profile}
        options={{
          tabBarIcon: props =>
            TabIcon({
              ...props,
              name: props.focused ? 'video' : 'video-outline',
            }),
        }}
      />
    </Tab.Navigator>
  );
};





export default TabNavigation;