import {StyleSheet} from 'react-native';

//Here the styles of the button are created.
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    backgroundColor: '#1ED760',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
