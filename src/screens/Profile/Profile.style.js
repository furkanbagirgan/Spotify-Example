import {StyleSheet,StatusBar, Dimensions} from 'react-native';

//Here the basic styles of the profile screen are created.
const basicStyles=StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight? StatusBar.currentHeight+25 : 25,
    paddingBottom: 25,
    paddingHorizontal: 25,
  },
  userContainer:{
    width: '100%',
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25
  },
  imageWrapper: {
    width: 64,
    height: 64,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 32,
  },
  rightContainer:{
    width: Dimensions.get('screen').width - 124,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  email: {
    fontSize: 16,
  }
});

//Here the changing styles of the profile screen are created.
const styles = {
  light: StyleSheet.create({
    ...basicStyles,
    container:{
      ...basicStyles.container,
      backgroundColor: 'white',
    },
    email: {
      ...basicStyles.email,
      color: '#A9A9A9',
    },
  }),
  dark: StyleSheet.create({
    ...basicStyles,
    container:{
      ...basicStyles.container,
      backgroundColor: '#191414',
    },
    email: {
      ...basicStyles.email,
      color: '#FFF',
    },
  }),
};

export default styles;
