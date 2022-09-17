import React, { useCallback, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Home.style";
import MusicCard from "../../components/MusicCard";
import ListCard from "../../components/ListCard";
import { getMusicsAndLists } from "../../redux/musicSlice";

const Home = ({ navigation }) => {
  //Necessary context data and states are created.
  const theme = useSelector((state) => state.theme.theme);
  const { newMusics, newLists, loading, error } = useSelector(
    (state) => state.music
  );
  const likedMusics = useSelector(
    (state) => state.user.likedMusics
  );
  const dispatch = useDispatch();

  //function that returns new musics and lists.
  const getData = useCallback(() => {
    dispatch(getMusicsAndLists());
  }, [dispatch]);

  //It runs the getMusics function when the screen is first launched.
  useEffect(() => {
    getData();
  }, [getData]);

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

  //Here, there is a function that adjusts how the areas to be repeated in the
  //flat list of newLists will appear on the screen. Also, a ListCard component is created for each chat.
  const renderList = ({ item }) => {
    return (
      <ListCard
        name={item.name}
        image={item.images[0].url}
        handlePress={() => goToListDetail(item.name,item.id)}
      />
    );
  };

  //Here is the function that allows switching to the detail screen when each listCard component is clicked.
  const goToListDetail = (listName,listId) => {
    navigation.navigate("Detail", { listName,listId });
  };

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

  //Here, the flat list that will appear on the screen are created.
  return (
    <SafeAreaView style={styles[theme].container}>
      <FlatList
        contentContainerStyle={styles[theme].musicContainer}
        keyExtractor={keyExtractor}
        data={newMusics}
        renderItem={renderMusic}
        refreshing={loading}
        overScrollMode="never"
        bounces={false}
        ListHeaderComponent={
          <View style={styles[theme].listContainer}>
            <FlatList
              horizontal={false}
              numColumns={2}
              keyExtractor={keyExtractor}
              data={newLists}
              renderItem={renderList}
              refreshing={loading}
              overScrollMode="never"
              bounces={false}
              columnWrapperStyle={styles[theme].columnWrapper}
            />
            <Text style={styles[theme].musicTitle}>New Releases</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Home;
