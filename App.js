import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  Image,
  ScrollView,
  ListView,
  ListViewDataSource
} from 'react-native';
import styles from './src/styles'
import CustomCamera from 'react-native-camera';
import add from './resource/logo.png'
import path from './resource/path16.png'
import Webview from './components/webview'

class App extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([{
        "id" : "-KqEyl77MMdLu6aqxDQm",
        "regDate": "2017-07-04",
        "seller": "GS25공릉쉼터",
        "img": "https://s3-us-west-2.amazonaws.com/unithon777/images/KqCskCK_JnEnM2V4HM7/big.png",
        "value": 1080,
      }, {
        "id" : "-KqEyl77MMdLu6aqxDQm",
        "regDate": "2017-07-22",
        "seller": "스타벅스",
        "value": 16000,
      }, {
        "id" : "-KqEyl77MMdLu6aqxDQm",
        "regDate": "2017-07-17",
        "seller": "씨제이오쇼핑",
        "img": "https://s3-us-west-2.amazonaws.com/unithon777/images/KqCskCK_JnEnM2V4HM7/shopping.jpg",
        "value": 54000,
      }, {
        "id" : "-KqEyl77MMdLu6aqxDQm",
        "regDate": "2017-07-01",
        "seller": "던킨도너츠",
        "img": "https://s3-us-west-2.amazonaws.com/unithon777/images/KqCskCK_JnEnM2V4HM7/donkin.jpg",
        "value": 5600,
      }]),
      showWeb: false,
    };
  }

  changeMode() {
    this.setState({
      showWeb: true
    })
  }

  login() {
    fetch('http://ec2-13-124-186-66.ap-northeast-2.compute.amazonaws.com:3000/users/naverlogin  ', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
  }

  renderRow(rowData) {
    if (rowData === '') {
      return (
        <View style={{flex: 1}}>
        </View>
      );
    } else {
      return (
        <View style={styles.conn}>
          <View style={styles.map}>
            <View style={styles.mapInfo}>
              <View>
                <Image
                  style={styles.img}
                  source={{uri: rowData.img}} ></Image>
              </View>
              <View style={styles.between}>
                <TouchableOpacity onPress={() => this.camera.capture()
                  .then((data) => {
                    Actions.crop({imgPath: data.path});
                  }).catch(err => console.error(err))} >
                  <Text style={styles.product}>{rowData.seller}</Text>
                  <Text style={styles.regdate}>{rowData.regDate}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.productValue}>{rowData.value}</Text>
            </View>
          </View>
        </View>
      )
    }
  }

  render() {


    return (
      <View style={styles.container}>
        <View style={styles.iconAdd}>
          {/*<Image*/}
            {/*style={styles.icon}*/}
            {/*source={add}>*/}
          {/*</Image>*/}
          <View style={styles.textWrap}>
            <Text style={styles.textLittle}>이번달 총소비 금액</Text>
            <Text style={styles.textLarge} >574,100원</Text>
          </View>
        </View>
        <View style={styles.infoWrap}>
          <View>
            <Text style={styles.textLittle}>농협 302-501-213421 + </Text>
          </View>
        </View>
        <View style={styles.scroll}>
          <ScrollView>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow.bind(this)}
              style={styles.listview}>
            </ListView>
          </ScrollView>
          {/*<TouchableOpacity*/}
            {/*onPress={() => this.changeMode() }>*/}
            {/*<Image*/}
              {/*style={styles.path}*/}
              {/*source={path}>*/}
            {/*</Image>*/}
          {/*</TouchableOpacity>*/}
        </View>
      </View>
    )
  }
}

export default App;
