import {StyleSheet} from 'react-native';

//Here the basic styles of the settings screen are created.
const basicStyles=StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  imageWrapper: {
    width: 150,
    height: 150,
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
  },
  email: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer:{
    height: 115,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15
  },
  bottomContainer:{
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    marginBottom: 25
  }
});

//Here the styles of the settings screen are created.
const styles = {
  light:StyleSheet.create({
    ...basicStyles,
    container: {
      ...basicStyles.container,
      backgroundColor: 'white',
    },
    email: {
      ...basicStyles.email,
      color: '#A9A9A9',
    },
  }),
  dark:StyleSheet.create({
    ...basicStyles,
    container: {
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
