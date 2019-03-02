import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View>
          <Text>Hello world!</Text>
        </View>
        <Text>Foodastic</Text>
        <Text>- An easy way to live healthy life!</Text>
      </View>
    );
  }
}
