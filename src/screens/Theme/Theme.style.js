import {StyleSheet} from 'react-native';

//Here the basic styles of the theme screen are created.
const basicStyles=StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  themeWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  themeContainer: {
    width: 125,
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  themeText: {
    marginTop: 10,
    fontSize: 16,
  },
});

//Here the styles of the theme screen are created.
const styles = StyleSheet.create({
  light:StyleSheet.create({
    ...basicStyles,
    container: {
      ...basicStyles.container,
      backgroundColor: 'white',
    },
    lightTheme:{
      ...basicStyles.themeContainer,
      backgroundColor: '#A9A9A9',
    },
    darkTheme:{
      ...basicStyles.themeContainer,
      backgroundColor: '#333',
    },
    themeText: {
      ...basicStyles.themeText,
      color: '#A9A9A9',
    },
  }),
  dark:StyleSheet.create({
    ...basicStyles,
    container: {
      ...basicStyles.container,
      backgroundColor: '#191414',
    },
    lightTheme:{
      ...basicStyles.themeContainer,
      backgroundColor: '#A9A9A9',
    },
    darkTheme:{
      ...basicStyles.themeContainer,
      backgroundColor: '#333',
    },
    themeText: {
      ...basicStyles.themeText,
      color: '#FFF',
    },
  })
});

export default styles;
