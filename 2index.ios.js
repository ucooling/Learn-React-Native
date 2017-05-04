import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

//这里出现了一个新的组件View, View常用作其他组件的容器，来帮助控制布局和样式。

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name} !</Text>
        );
    }
}

class AwesomeProject extends Component {
  render() {
      return (
          <View style={{alignItems: 'center'}}>
              <Greeting name="马立斌" />
              <Greeting name="王雪" />
              <Greeting name="颜振强" />
          </View>
      );
    }
}

//注意，这里用引号括起来的'HelloWorldApp'必须和你的创建的项目名一致
//AppRegistry模块是用来告知React Native哪一个组件被注册为整个应用的根容器
//在一般的整个应用中AppRegistry.registerComponent只会被调用一次。
AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);