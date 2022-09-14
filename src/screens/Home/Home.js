import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, Text, FlatList, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import styles from './Home.style';
import MusicCard from '../../components/MusicCard';
import {getFilteredMovies} from '../../redux/movieSlice';

const Home = ({navigation}) => {
  //Necessary context data and states are created.
  const theme = useSelector(state => state.theme.theme);
  const movies = useSelector(state => state.movie.filteredMovies);
  const loading = useSelector(state => state.movie.loading);
  const error = useSelector(state => state.movie.error);
  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFilter] = useState('top_rated');

  //function that returns movies according to the selected filter
  const getMoviesByFilter = useCallback(() => {
    dispatch(getFilteredMovies(selectedFilter));
  }, [selectedFilter, dispatch]);

  //It runs the getMoviesByFilter function every time the selected filter changes.
  useEffect(() => {
    getMoviesByFilter();
  }, [selectedFilter, getMoviesByFilter]);

  //Here is the function where key assignments of the fields to repeat in the flat list are made.
  const keyExtractor = item => {
    return String(item.id);
  };

  //Here, there is a function that adjusts how the areas to be repeated in the
  //flat list will appear on the screen. Also, a movieCard component is created for each chat.
  const renderItem = ({item}) => {
    return (
      <MusicCard
        name={item.title}
        image={item.poster_path}
        description={item.overview}
        vote={item.vote_average}
        handlePress={() => goToMovieDetail(item.id)}
        theme={theme}
      />
    );
  };

  //Here is the function that allows switching to the detail screen when each movieCard component is clicked.
  const goToMovieDetail = movieId => {
    navigation.navigate('Detail', {movieId});
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
          data={movies}
          renderItem={renderItem}
          refreshing={loading}
          onRefresh={getMoviesByFilter}
          overScrollMode="never"
          bounces={false}
          ItemSeparatorComponent={ItemDivider}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
