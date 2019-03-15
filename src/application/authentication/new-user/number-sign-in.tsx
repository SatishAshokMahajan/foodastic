import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

interface NumberSignInStateProps {
    text?: string
}
export default class NumberSignIn extends React.Component<NumberSignInStateProps> {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    render() {
        return (
            <View style={{ padding: 10 }}>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Phone No:"
                    onChangeText={(text) => this.setState({ text })}
                />
                <Text style={{ padding: 10, fontSize: 42 }}>
                    {/* {this.state.text.split(' ').map((word) => word && '🍕').join(' ')} */}
                </Text>
            </View>
        );
    }
}

