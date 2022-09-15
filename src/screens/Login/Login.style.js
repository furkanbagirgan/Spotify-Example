import {StyleSheet} from 'react-native';

//Here the basic styles of the login screen are created.
const basicStyles=StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  signupText: {
    fontSize: 16,
    marginTop: 25,
    marginBottom: 15
  },
  header: {
    color: '#1ED760',
    fontSize: 50,
    fontWeight: 'bold',
  },
  formContainer: {
    marginVertical: 20
  },
});

//Here the changing styles of the login screen are created.
const styles = {
  light: StyleSheet.create({
    ...basicStyles,
    container:{
      ...basicStyles.container,
      backgroundColor: 'white',
    },
    signupText: {
      ...basicStyles.signupText,
      color: '#A9A9A9',
    },
  }),
  dark: StyleSheet.create({
    ...basicStyles,
    container:{
      ...basicStyles.container,
      backgroundColor: '#191414',
    },
    signupText: {
      ...basicStyles.signupText,
      color: '#FFF',
    },
  }),
};

export default styles;
