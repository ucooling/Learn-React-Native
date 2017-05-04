import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { showText: true };

        setInterval(()=>{
            this.setState(() => {
                return { showText: !this.state.showText }
            });
        }, 1000)
    }

    render() {
        let display = this.state.showText ? this.props.text : '';

        return (
            <Text> {display} </Text>
        )
    }
}

class AwesomeProject extends Component {
  render() {
      return (
          <View>
              <Blink text="I love to blink"/>
              <Blink text="Yes blinking is so great" />
              <Blink text="Why did they ever" />
          </View>
      );
    }
}

//注意，这里用引号括起来的'HelloWorldApp'必须和你的创建的项目名一致
//AppRegistry模块是用来告知React Native哪一个组件被注册为整个应用的根容器
//在一般的整个应用中AppRegistry.registerComponent只会被调用一次。
AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);