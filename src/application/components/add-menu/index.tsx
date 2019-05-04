import React, { Component } from "react";
import { View, TextInput, Text, Button } from "react-native";
import AddMenuStyle from "./style";

export default class AddMenu extends Component {
  render() {
    return (
      <View style={AddMenuStyle.root}>
        <View style={AddMenuStyle.rowContainer}>
          <Text style={AddMenuStyle.text}> Item:</Text>
          <TextInput autoCorrect={false} style={AddMenuStyle.textInput} />
        </View>
        <View style={AddMenuStyle.rowContainer}>
          <Text style={AddMenuStyle.text}> Price:</Text>
          <TextInput autoCorrect={false} style={AddMenuStyle.textInput} />
        </View>
        <View style={AddMenuStyle.rowContainer}>
          <Text style={AddMenuStyle.text}> Cal/gm:</Text>
          <TextInput autoCorrect={false} style={AddMenuStyle.textInput} />
        </View>
        <View style={AddMenuStyle.rowContainer}>
          <Text style={AddMenuStyle.text}> Tag:</Text>
          <TextInput autoCorrect={false} style={AddMenuStyle.textInput} />
        </View>
        <View style={AddMenuStyle.rowContainer}>
          <Text style={AddMenuStyle.text}> Comments:</Text>
          <TextInput autoCorrect={false} style={AddMenuStyle.textInputArea} />
        </View>
        <View style={AddMenuStyle.buttonContainer}>
          <Button
            onPress={() => {
              alert("Hello");
            }}
            title="Submit"
            color="blue"
          />
        </View>
      </View>
    );
  }
}

