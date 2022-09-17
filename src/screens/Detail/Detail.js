import React, {useEffect,useCallback} from 'react';
import {SafeAreaView, FlatList, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {getListDetail} from '../../redux/detailSlice';
import MusicCard from "../../components/MusicCard";
import styles from './Detail.style';

const Detail = ({route}) => {
  //Necessary states are created.
  const {listId} = route.params;
  const theme = useSelector(state => state.theme.theme);
  const likedMusics = useSelector(state => state.user.likedMusics);
  const listMusics = useSelector(state => state.detail.listMusics);
  const loading = useSelector(state => state.detail.loading);
  const error = useSelector(state => state.detail.error);
  const dispatch = useDispatch();

  //When the page is opened for the first time, the movie detail is displayed.
  useEffect(() => {
    dispatch(getListDetail(listId));
  }, [dispatch, listId]);

  //Here is the function where key assignments of the fields to repeat in the flat list are made.
  const keyExtractor = (item) => {
    return item.id;
  };

  //Here, there is a function that adjusts how the areas to be repeated in the
  //flat list of newMusics will appear on the screen. Also, a MusicCard component is created for each chat.
  const renderMusic = useCallback(({ item }) => {
    const result=likedMusics.findIndex((music)=> {
      return item.id===music.id;
    });
    const isLiked=result !== -1 ? true : false;
    return (
      <MusicCard
        music={item}
        theme={theme}
        isLiked={isLiked}
      />
    );
  },[likedMusics]);

  if (error) {
    return (
      <View style={styles[theme].errorWrapper}>
        <Text style={styles[theme].errorText}>Connection Error</Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles[theme].loadingContainer}>
        <ActivityIndicator color="#A9A9A9" size={35} />
      </View>
    );
  }

  //Here, the movie detail that will appear on the screen are created.
  return (
    <SafeAreaView style={styles[theme].container}>
      <FlatList
        contentContainerStyle={styles[theme].musicContainer}
        keyExtractor={keyExtractor}
        data={listMusics}
        renderItem={renderMusic}
        overScrollMode="never"
        bounces={false}
      />
    </SafeAreaView>
  );
};

export default Detail;
