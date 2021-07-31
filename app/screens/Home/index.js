import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setError} from '../../redux/actions';
import {} from 'react-native-gesture-handler'; 
import {appColors} from '../../utils/appColors'; 
import UploadPost from '../../components/UploadPost';
import Container from '../../components/Container';
import StoryCard from '../../components/StoryCard'; 
import { scale } from 'react-native-size-matters';
import Posts from '../../components/Posts';
import { posts } from '../../utils/MockData';

export default function Home() {
  const [isError, setIsError] = useState({});
  const [text, setText] = useState('hello');
  let error = useSelector((state) => state.error); // getting from reducer.
  const dispatch = useDispatch();
  const hasError = (error) => {
    dispatch(setError({error})); //here we can call a action to set an error in reducer.
  };
  console.log('error is =>', isError);
  useEffect(() => {
    setIsError(error);
  }, [error]);
  return (
    <Container isScrollable showHeader style={styles.container}>
      <View>
        <UploadPost />
      </View>
      <View style={{  paddingHorizontal:scale(10)}}>
      <StoryCard />
      </View>
      <View style={{  paddingHorizontal:scale(10),marginTop:scale(30)}}>
       <Posts posts={posts} />
      </View>
      
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: appColors.primary,
    alignItems: 'center',
    borderBottomWidth: 12,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    padding: 20,
    margin: 20,
    textAlign: 'center',
  },
  TitleText: {
    fontSize: 25,
    // padding: 20,
    marginVertical: 20,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
