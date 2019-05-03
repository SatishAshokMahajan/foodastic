import React from 'react';
import {View, Text, Button} from 'react-native';
import {ButtonComponent} from '../Button-component';
import { StackNavigator } from 'react-navigation';


export default class HomePage extends React.Component < {} > {

    render() {
        return (
            <View style={{
                flex: 1,
                marginTop: 120,
                marginBottom: 120,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <ButtonComponent text="Show Menu"/>
                <ButtonComponent text="Add Menu"/>
                <ButtonComponent text="Add Order"/>
                <ButtonComponent text="View Order"/>
            </View>
        )
    }
}