import {StyleSheet} from 'react-native';

//Here the styles of the input are created.
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 45,
    paddingHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    backgroundColor: 'transparent',
  },
  input: {
    marginLeft: 5,
    flex: 1,
    color: '#A9A9A9',
  },
});

export default styles;
