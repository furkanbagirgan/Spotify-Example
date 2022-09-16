import {Dimensions, StyleSheet} from 'react-native';

//Here the styles of the listCard are created.
const styles = StyleSheet.create({
  container:{
    borderRadius:15,
    marginVertical:5
  },
  wrapper: {
    width: Dimensions.get('screen').width/2.4,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#A9A9A9',
    borderRadius: 15,
  },
  imageWrapper: {
    width: 60,
    height: 80,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF',
    marginLeft: 5,
    flexShrink: 1
  },
});

export default styles;
