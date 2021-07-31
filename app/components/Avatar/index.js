import React from 'react';
import {View, Text, Image} from 'react-native';
import {scale} from 'react-native-size-matters';

export default function index({image}) {
  return (
    <Image
      style={{
        height: scale(30),
        width: scale(30),
        borderRadius: scale(20),
      }}
      source={image? image :require('../../statics/profile.png')}
    />
  );
}
