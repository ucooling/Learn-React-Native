import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class AwesomeProject extends Component {
  render() {
      return (
          <Text>Hello World!</Text>
      );
    }
}

//注意，这里用引号括起来的'HelloWorldApp'必须和你的创建的项目名一致
//AppRegistry模块是用来告知React Native哪一个组件被注册为整个应用的根容器
//在一般的整个应用中AppRegistry.registerComponent只会被调用一次。
AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);