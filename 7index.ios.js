import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput } from 'react-native';


//处理文本输入
class AwesomeProject extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40, border: 1 }}
                    placeholder='Type here to translate'
                    onChangeText={(text)=> this.setState({text})}
                />

                <Text style={{padding: 0, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word).join(' ')}
                </Text>
            </View>
      );
    }
}

//注意，这里用引号括起来的'HelloWorldApp'必须和你的创建的项目名一致
//AppRegistry模块是用来告知React Native哪一个组件被注册为整个应用的根容器
//在一般的整个应用中AppRegistry.registerComponent只会被调用一次。
AppRegistry.registerComponent('AwesomeProject', ()=> AwesomeProject);