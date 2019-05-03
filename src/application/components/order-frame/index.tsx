import React from 'react';
import {View, Text, Button} from 'react-native';
import {ButtonComponent} from '../../components/Button-component';

interface Idata {
    item: string;
    price: string;
    cal_gm: string;
}

interface IViewOrderProps {
    testID?: string;
    data: Idata;
    onEdit?: () => void;
    onDelete?: () => void;
}


export const OrderFrame: React.StatelessComponent<IViewOrderProps> = (props) => (
    <View>
        <Text>Item:</Text>
        <Text>{props.data.item}</Text>
        <Text>Price:</Text>
        <Text>{props.data.price}</Text>
        <Text>calories per gram</Text>
        <Text>{props.data.cal_gm}</Text>
        <ButtonComponent text="edit"/>
        <ButtonComponent text="delete"/>
    </View>
);