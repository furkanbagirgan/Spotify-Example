import {Dimensions, StyleSheet} from 'react-native';

//Here the basic styles of the input are created.
const basicStyles=StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  wrapper:{
    width: '90%',
    height: '100%',
    flexDirection:'row',
  },
  imageWrapper: {
    width: 70,
    height: 70,
    alignSelf: 'flex-start',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  singer: {
    marginTop: 5,
  },
});

//Here the styles of the contactCard are created.
const styles = {
  light:StyleSheet.create({
    ...basicStyles,
    name:{
      ...basicStyles.name,
      color:'#A9A9A9'
    },
    singer:{
      ...basicStyles.name,
      color:'#A9A9A9'
    }
  }),
  dark:StyleSheet.create({
    ...basicStyles,
    name:{
      ...basicStyles.name,
      color:'#FFF'
    },
    singer:{
      ...basicStyles.name,
      color:'#FFF'
    }
  }),
};

export default styles;
