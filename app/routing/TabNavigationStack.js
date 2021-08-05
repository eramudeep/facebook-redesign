/**
 * @author Amusoftech <er.amudeep@gmail.com>
 * @description Minimal example of Tab Navigations
 */
import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RoutesList} from './routes';
import {appColors} from '../utils/appColors';
import { scale } from 'react-native-size-matters';

const Tab = createBottomTabNavigator();

export default function TabNavigationStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: appColors.primary,
          inactiveTintColor: appColors.secondary,
          style:{ 
            borderRadius:scale(14)
          }
        }}>
        {RoutesList?.map((route, key) => {
          const {name, component, options} = route;
          return (
            <Tab.Screen
              key={key}
              name={name}
              component={component}
              options={options}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
