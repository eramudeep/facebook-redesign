import React from 'react';
import {View, FlatList} from 'react-native';
import AvatarImage from '../Avatar';
import Label from '../Label';
import Feather from 'react-native-vector-icons/Feather';
import {scale} from 'react-native-size-matters';
import {appColors,shadow} from '../../utils/appColors';

export default function index() {
  const Card = ({icon, label,color}) => {
    return (
      <View
        style={{
          borderRadius: scale(5),
          backgroundColor: appColors.bgLight,
          height: scale(40),
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal:scale(6),
           width:'31.33%',
          //marginRight:scale(10),
          //...shadow

        }}>
        <Feather name={icon} size={scale(15)} color={color ? color :appColors.green} />
        <Label text={label} style={{marginLeft: scale(10), opacity:0.6, fontSize:scale(12)}} />
      </View>
    );
  };
  const _renderMultiMeadiCard = () => {
    return (
      <View style={{marginTop: scale(20),   flexDirection:'row', justifyContent:'space-between', alignItems:'center' , }}>
         <Card icon="camera" label="Fotos"/>
         <Card icon="video" label="En vivo" color={appColors.red}/>
         <Card icon="eye" label="Video " color={appColors.primary}/> 
          
      </View>
    );
  };
  return (
    <View style={{backgroundColor:appColors.white,    paddingVertical:scale(40),paddingHorizontal:scale(10), borderBottomRightRadius:scale(25), borderBottomLeftRadius:scale(25)}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <AvatarImage />
        </View>
        <View
          style={{
            width: '80%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Label text="¿Qué estas pensando, Mao?" style={{opacity: 0.4}} />
          <Feather name="smile" size={scale(20)} color={appColors.yellow} />
        </View>
      </View>
      {_renderMultiMeadiCard()}
    </View>
  );
}
