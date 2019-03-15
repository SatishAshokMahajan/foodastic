import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { styles } from './user-profile-style';

export default class UserProfile extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text: string) => this.setState({ email: text });
   handlePassword = (text: string) => this.setState({ password: text });
   login = (email: string, pass: string) => alert('email: ' + email + ' password: ' + pass);

   render() {
      return (
         <View style={styles.container}>
            <TextInput style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="Email"
               placeholderTextColor="#9a73ef"
               autoCapitalize="none"
               onChangeText={this.handleEmail} />

            <TextInput style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="Password"
               placeholderTextColor="#9a73ef"
               autoCapitalize="none"
               onChangeText={this.handlePassword} />

            <TouchableOpacity
               style={styles.submitButton}
               onPress={
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style={styles.submitButtonText}> View Both </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
