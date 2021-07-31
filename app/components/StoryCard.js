import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {scale} from 'react-native-size-matters';
import Label from '../components/Label';
import {appColors} from '../utils/appColors';
import { stories } from '../utils/MockData';

export default function StoryCard() {
  const Story = ({item}) => {
      const {name,me,img,profileImg}=item
    return (
      <View
        style={{ 
          justifyContent: 'center',
          alignItems: 'center',
          //  paddingVertical:scale(20)
        }}>
        <View style={{marginBottom: scale(10)}}>
          <Image source={img} />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 20,
            backgroundColor: 'green',
            width: scale(25),
            height: scale(25),
            borderRadius: scale(15),
          }}>
          <Image
            style={{
              borderWidth: 1,
              borderColor: appColors.primary,
              width: scale(25),
              height: scale(25),
              borderRadius: scale(15),
            }}
            source={profileImg}
          />
        </View>
        <Label  style={{opacity:0.5, fontSize:scale(11)}} text={name} />
      </View>
    );
  };
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{width: scale(10)}} />}
      horizontal
      data={stories}
      renderItem={({item,index}) => <Story key={index} item={item} />}
    />
  );
}
