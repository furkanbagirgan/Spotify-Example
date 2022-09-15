import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, Text, FlatList, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import styles from './Home.style';
import MusicCard from '../../components/MusicCard';
import {getFilteredMusic} from '../../redux/musicSlice';

const Home = ({navigation}) => {
  //Necessary context data and states are created.
  const theme = useSelector(state => state.theme.theme);
  const movies = useSelector(state => state.music.filteredMusic);
  const loading = useSelector(state => state.music.loading);
  const error = useSelector(state => state.music.error);
  const dispatch = useDispatch();
  const [data,setData]=useState([]);
  const [selectedFilter, setSelectedFilter] = useState('top_rated');

  //function that returns musics according to the selected filter
  const getMusicsByFilter = useCallback(() => {
    dispatch(getFilteredMusic(selectedFilter));
  }, [selectedFilter, dispatch]);

  //It runs the getMusicsByFilter function every time the selected filter changes.
  useEffect(() => {
    getMusicsByFilter();
  }, [selectedFilter, getMusicsByFilter]);

  //Here is the function where key assignments of the fields to repeat in the flat list are made.
  const keyExtractor = item => {
    return String(item.id);
  };

  //Here, there is a function that adjusts how the areas to be repeated in the
  //flat list will appear on the screen. Also, a musicCard component is created for each chat.
  const renderItem = ({item}) => {
    return (
      <MusicCard
        name={item.title}
        image={item.poster_path}
        description={item.overview}
        vote={item.vote_average}
        handlePress={() => goToListDetail(item.id)}
        theme={theme}
      />
    );
  };

  //Here is the function that allows switching to the detail screen when each movieCard component is clicked.
  const goToListDetail = listId => {
    navigation.navigate('Detail', {listId});
  };

  //Here is the function that creates a line to appear between the areas to repeat in the flat list.
  const ItemDivider = () => {
    return <View style={styles.divider} />;
  };

  //Here, the flat list that will appear on the screen are created.
  return (
    <SafeAreaView
      style={theme === 'light' ? styles.lightContainer : styles.darkContainer}>
      {error ? (
        <View style={styles.errorWrapper}>
          <Text style={styles.errorText}>Connection Error</Text>
        </View>
      ) : (
        <FlatList
          keyExtractor={keyExtractor}
          data={data}
          renderItem={renderItem}
          refreshing={loading}
          onRefresh={getMusicsByFilter}
          overScrollMode="never"
          bounces={false}
          ItemSeparatorComponent={ItemDivider}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
