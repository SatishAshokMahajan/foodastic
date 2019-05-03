import React, { Component } from 'react';
import { View } from 'react-native';
import AddMenu from './application/components/add-menu'

export default class Foodastic extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <AddMenu/>
      </View>
    );
  }
}
