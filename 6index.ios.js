import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';


//flexDirection决定布局的主轴，
//justifyContent决定其子元素沿着主轴的排列方式，
//alignItems沿着次轴的排列方式。
class AwesomeProject extends Component {
  render() {
      return (
          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}></View>
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}></View>
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}></View>
          </View>
      );
    }
}

//注意，这里用引号括起来的'HelloWorldApp'必须和你的创建的项目名一致
//AppRegistry模块是用来告知React Native哪一个组件被注册为整个应用的根容器
//在一般的整个应用中AppRegistry.registerComponent只会被调用一次。
AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);