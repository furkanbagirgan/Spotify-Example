import {StyleSheet} from 'react-native';

//Here the basic styles of the signUp screen are created.
const basicStyles=StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
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

//Here the changing styles of the signUp screen are created.
const styles = {
  light: StyleSheet.create({
    ...basicStyles,
    container:{
      ...basicStyles.container,
      backgroundColor: 'white',
    },
  }),
  dark: StyleSheet.create({
    ...basicStyles,
    container:{
      ...basicStyles.container,
      backgroundColor: '#191414',
    },
  }),
};

export default styles;
