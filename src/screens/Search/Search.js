import React, {useState,useCallback} from 'react';
import {SafeAreaView, Text, FlatList, View,ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from '@expo/vector-icons/Ionicons';

import styles from './Search.style';
import MusicCard from '../../components/MusicCard';
import Input from '../../components/Input';
import {getSearchedMusics} from '../../redux/searchSlice';

const Search = ({navigation}) => {
  //Necessary context data and states are created.
  const theme = useSelector(state => state.theme.theme);
  const musics = useSelector(state => state.search.searchedMusics);
  const likedMusics = useSelector(state => state.user.likedMusics);
  const loading = useSelector(state => state.search.loading);
  const error = useSelector(state => state.search.error);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  //function that returns musics according to the searched text
  const getMusicsBySearch = () => {
    dispatch(getSearchedMusics(searchText));
  };

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

  //Here, the flatlist that will appear on the screen are created.
  return (
    <SafeAreaView
      style={styles[theme].container}>
      <FlatList
        contentContainerStyle={styles[theme].musicContainer}
        keyExtractor={keyExtractor}
        data={musics}
        renderItem={renderMusic}
        refreshing={loading}
        overScrollMode="never"
        bounces={false}
        ListHeaderComponent={
          <View style={styles[theme].searchBar}>
              <View style={styles[theme].inputWrapper}>
                <Input
                  placeholder="Music Title..."
                  value={searchText}
                  iconName="search"
                  theme={theme}
                  onChangeText={setSearchText}
                />
              </View>
              <View style={styles[theme].buttonWrapper}>
                <Icon
                  name="search"
                  size={25}
                  color="white"
                  onPress={getMusicsBySearch}
                />
              </View>
            </View>
        }
      />
    </SafeAreaView>
  );
};

export default Search;

/*
ListHeaderComponent={
            <View style={styles.searchBar}>
              <View style={styles.inputWrapper}>
                <Input
                  placeholder="Movie Title..."
                  placeholderTextColor="#C996CC"
                  value={searchText}
                  iconName="magnify"
                  onChangeText={setSearchText}
                />
              </View>
              <View style={styles.buttonWrapper}>
                <Icon
                  name="magnify"
                  size={25}
                  color="white"
                  onPress={getMoviesBySearch}
                />
              </View>
            </View>
          }
*/
