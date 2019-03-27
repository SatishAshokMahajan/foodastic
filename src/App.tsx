import React, { Component } from 'react';
import { View } from 'react-native';
// import NumberSignIn from './application/authentication/new-user/number-sign-in';
// import UserProfile from './application/authentication/new-user/user-profile';
import BasicExample from './application/components/splash-screen/index';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <BasicExample/>
        {/* <NumberSignIn />
        <UserProfile /> */}
      </View>
    );
  }
}
