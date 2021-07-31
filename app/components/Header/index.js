import React from 'react';
import {View, Text, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';  
import {appColors} from '../../utils/appColors';
export default function index() {
  const _renderIcon = (icon) => {
    return (
      <View
        style={{
          backgroundColor: appColors.bgLight,
          height: scale(35),
          width: scale(35),
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: scale(20),
          padding: scale(5),
        }}>
        <Icon name={icon} size={scale(20)} color={appColors.darkBlue} />
      </View>
    );
  };
  return (
    <View style={{height: scale(50), paddingHorizontal: scale(10), height:scale(80), backgroundColor:appColors.white}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center', 
          borderBottomWidth:0.4,
          borderColor:appColors.lightGray,
           
        }}>
        <Image
          style={{height: scale(40), width: scale(40), borderRadius: scale(20)}}
          source={require('../../statics/logo.png')}
        />
        <View
          style={{
            width: '65%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {_renderIcon('search')}
          {_renderIcon('bell')} 
            
          <View
            style={{
              backgroundColor: appColors.bgLight,
              height: scale(35),
              width: scale(35),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: scale(20),
              padding: scale(5),
            }}>
            <Image
              style={{
                height: scale(20),
                width: scale(20),
                borderRadius: scale(20),
              }}
              //resizeMode="center"
              source={require('../../statics/messenger.png')}
            />
          </View>

          <Image
            style={{
              height: scale(40),
              width: scale(40),
              borderRadius: scale(20),
            }}
            source={require('../../statics/profile.png')}
          />
        </View>
      </View>
    </View>
  );
}
