import {StyleSheet} from 'react-native';

//Here the styles of the login screen are created.
const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    backgroundColor: 'white',
  },
  darkContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    backgroundColor: '#191414',
  },
  header: {
    color: '#1DB954',
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default styles;