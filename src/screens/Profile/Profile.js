import React,{useCallback} from 'react';
import {SafeAreaView,FlatList,View,Text,Image} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from '@expo/vector-icons/Ionicons';

import styles from './Profile.style';
import MusicCard from "../../components/MusicCard";

const Profile = ({navigation}) => {
  //Necessary context data and states are created.
  const userSession = useSelector(state => state.auth.currentUser);
  const theme = useSelector(state => state.theme.theme);
  const likedMusics = useSelector(
    (state) => state.user.likedMusics
  );

  //Here is the transition to the settings screen.
  const goToSettings = () => {
    navigation.navigate('Settings',{theme});
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

  //Here, the user's favorite music and settings are listed.
  return (
    <SafeAreaView style={styles[theme].container}>
      <FlatList
        contentContainerStyle={styles[theme].musicContainer}
        keyExtractor={keyExtractor}
        data={likedMusics}
        renderItem={renderMusic}
        overScrollMode="never"
        bounces={false}
        ListHeaderComponent={
          <>
            <View style={styles[theme].userContainer}>
              <View style={styles[theme].imageWrapper}>
                <Image
                    source={{uri: 'https://picsum.photos/id/1010/150'}}
                    style={styles[theme].image}
                  />
              </View>
              <View style={styles[theme].rightContainer}>
                <Text style={styles[theme].email}>{userSession.email}</Text>
                <Icon name='settings' size={30} color='#1ED760' onPress={goToSettings} />
              </View>
            </View>
            <Text style={styles[theme].musicTitle}>Liked Musics</Text>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default Profile;
