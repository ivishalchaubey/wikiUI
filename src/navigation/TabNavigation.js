import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import navigationString from '../constants/navigationString';
import {Home, Products, Profile, Recent} from '../screens';
import {
  HomeIcon,
  ProductsIcon,
  ProfileIcon,
  RecentIcon,
} from '../assets/SVG_Icons';
import colors from '../style/colors';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: [
          {
            display: 'flex',
            backgroundColor: colors.black,
            height: 55,
          },
          null,
        ],
      }}>
      <Tab.Screen
        name={navigationString.HOME}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <HomeIcon />,
        }}
      />
      <Tab.Screen
        name={navigationString.PRODUCTS}
        component={Products}
        options={{
          tabBarLabel: 'Products',
          tabBarIcon: () => <ProductsIcon />,
        }}
      />
      <Tab.Screen
        name={navigationString.RECENTS}
        component={Recent}
        options={{
          tabBarLabel: 'Recent',
          tabBarIcon: () => <RecentIcon />,
        }}
      />
      <Tab.Screen
        name={navigationString.PROFILE}
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => <ProfileIcon />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
