import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

class AwesomeProject extends Component {
  render() {
      let pic = {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      };

      //注意{pic}：外围有一层括号，我们需要用括号来把pic这个变量嵌入到JSX语句中，括号的意思是
      //括号内部为一个JS表达式或者变量，需要执行后取值，因此可以把任意合法的JavaScript表达式通过
      //括号嵌入到JSX语句中。
      return (
          <Image source={pic} style={{width: 375, height:200}} />
      );
    }
}

//注意，这里用引号括起来的'HelloWorldApp'必须和你的创建的项目名一致
//AppRegistry模块是用来告知React Native哪一个组件被注册为整个应用的根容器
//在一般的整个应用中AppRegistry.registerComponent只会被调用一次。
AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);