import React from 'react';
import {View, Text, Button} from 'react-native';
import {OrderFrame} from '../order-frame';

var customData = require('../../data/orderData.json');

interface IShowMenuProps {
    testID?: string;
}


export const ShowMenu: React.StatelessComponent<IShowMenuProps> = (props) => (
    <View>
        {customData.map((details: any, i: React.ReactText) =>
        <OrderFrame data={details} key={i} />)}
    </View>
);