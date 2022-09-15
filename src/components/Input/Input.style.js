import {StyleSheet} from 'react-native';

//Here the basic styles of the input are created.
const basicStyles=StyleSheet.create({
  container: {
    width: '90%',
    height: 45,
    paddingHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 22,
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  input: {
    marginLeft: 5,
    flex: 1,
  },
});

//Here the changing styles of the input are created.
const styles = {
  light:StyleSheet.create({
    ...basicStyles,
    container: {
      ...basicStyles.container,
      borderColor: "#A9A9A9",
    },
    input:{
      ...basicStyles.input,
      color: "#A9A9A9"
    }
  }),
  dark:StyleSheet.create({
    ...basicStyles,
    container: {
      ...basicStyles.container,
      borderColor: "#FFF",
    },
    input:{
      ...basicStyles.input,
      color: "#FFF"
    }
  }),
};

export default styles;
