import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {appColors} from '../utils/appColors';
import Label from './Label';
import Avatar from '../components/Avatar';
import {scale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function Posts({posts}) {
  const IconWraper = ({addationalStyle, hw, colortoFill,children}) => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: scale( hw ? hw :30),
          width: scale( hw ? hw :30),
          backgroundColor:colortoFill ? colortoFill : appColors.lightBackground,
          borderRadius: scale(50),
          marginLeft: scale(10),
          ...addationalStyle
        }}>
        {children}
      </View>
    );
  };
  const CardHeader = ({location, profileImage, name}) => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <Avatar image={profileImage} />
          <View style={{marginLeft: scale(10)}}>
            <Label text={name} style={{left: -5}} />
            <View style={{flexDirection: 'row'}}>
              <FontAwesome name="globe" />
              <Label
                text={location}
                style={{fontSize: scale(9), marginLeft: scale(5)}}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            //   backgroundColor: 'red',
            //  width: scale(50),
          }}>
          <IconWraper>
            <Feather size={scale(12)} name="star" color={appColors.primary} />
          </IconWraper>
          <IconWraper>
            <Feather size={scale(12)} name="more-horizontal" />
          </IconWraper>
        </View>
      </View>
    );
  };

  const RenderPosts = ({item}) => {
    const {
      name,
      comments,
      likes,
      shares,
      likedBy,
      description,
      img,
      profileImg,
      location,
    } = item;
    return (
      <View
        style={{
          backgroundColor: appColors.white,
          paddingVertical: scale(20),
          paddingHorizontal: scale(10),
          borderBottomWidth: scale(0.23),
          borderColor: appColors.lightGray,
        }}>
        <CardHeader location={location} profileImage={profileImg} name={name} />
        <View style={{marginTop: scale(20)}}>
          <Label text={description} style={{opacity: 0.7}} />
        </View>
        <View style={{marginTop: scale(10)}}>
          <Image source={img} />
        </View>

        <View
          style={{
            marginTop: scale(10),
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '55%',
            alignItems: 'center',
          }}>
          <Label
            text={`${comments} comentarios`}
            style={{opacity: 0.5, fontSize: scale(11)}}
          />
          <View
            style={{
              height: scale(2.5),
              width: scale(2.5),
              backgroundColor: appColors.lightGray,
              borderRadius: scale(5),
            }}
          />
          <Label
            text={`${shares} compartidos`}
            style={{opacity: 0.5, fontSize: scale(11)}}
          />
        </View>

        <View
          style={{
            marginTop: scale(10),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flex: 0.4,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Feather
              name="thumbs-up"
              size={scale(20)}
              color={appColors.darkBlue}
            />
            <FontAwesome
              name="comment"
              size={scale(20)}
              color={appColors.darkBlue}
            />
            <FontAwesome
              name="share"
              size={scale(20)}
              color={appColors.darkBlue}
            />
          </View>
          <View
            style={{
              flex: 0.5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Label
              text={`Mao Lop ${likes} personas`}
              style={{opacity: 0.7, fontSize: scale(11)}}
            />
            <IconWraper  addationalStyle={{borderColor:appColors.white, borderWidth: scale(1.5)}} hw={scale(20)} colortoFill={appColors.primary}>
              <Feather name="thumbs-up" size={scale(12)} color={appColors.white} />
            </IconWraper>
            <View style={{left: -18}}>
              <IconWraper addationalStyle={{borderColor:appColors.white, borderWidth: scale(1.5)}} hw={scale(20)} colortoFill={appColors.red}>
                <Feather name="heart" size={scale(12)} color={appColors.white} />
              </IconWraper>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={posts}
      renderItem={({item, index}) => <RenderPosts key={index} item={item} />}
    />
  );
}
