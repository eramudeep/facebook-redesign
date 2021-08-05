/**
 * @author Amusoftech <er.amudeep@gmail.com>
 * @description List of routes for Tabs Navigator and Stack navigator, Along addational  Option for Tabs
 */
 import React from 'react';
import Home from '../screens/Home';
import {appColors} from '../utils/appColors';
import Feather from 'react-native-vector-icons/Feather';
import { scale } from 'react-native-size-matters';
export const RoutesList = [
  {
    name: 'Home',
    component: Home,
    options: {
      //tabBarBadge: 3,
      tabBarLabel: ()=>null,
      tabBarIcon: (props) => (
        <Feather name={'home'} size={scale(20)} color={appColors.primary} {...props} />
      ), 
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },
];
