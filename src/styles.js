import {
    Dimensions,
    Platform,
    StyleSheet,
    NativeModules
} from 'react-native';
const { StatusBarManager } = NativeModules;

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
export const HEADER_HEIGHT = 75;

const styles = StyleSheet.create({
  container: {
    flex: 667,
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: WIDTH,
  },
  iconAdd: {
    backgroundColor: "rgb(0, 91, 249)",
    alignItems: 'center',
    flex: 251,
  },
  scroll: {
    flex: 416,
    margin: 20,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  between: {
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  conn: {
      margin: 10
  },
  product: {
    fontSize: 15
  },
  productValue: {
    fontSize: 20,
    alignSelf: 'center'
  },
  listview: {

  },
  regdate: {
    fontSize: 10
  },
  img: {
    width: 40,
    height: 40
  },
  map: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mapInfo: {
    width: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoWrap: {
    backgroundColor: "rgb(0, 94, 220)",
    flex: 50,
  },
  textWrap: {
    top: 120
  },
  textLittle: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center'
  },
  textLarge: {
    fontSize: 40,
    color: 'white'
  },
  icon: {
    top: 200
  },
  path: {
    top: 400
  }
});


export default styles;