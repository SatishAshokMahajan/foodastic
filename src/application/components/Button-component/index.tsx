import React, { Component } from 'react';
import { View, Button } from 'react-native';


interface IButtonProps {
    testID?: string;
    disabled?: boolean;
    selected?: boolean;
    block?: boolean;
    onPress?: () => void;
    text: string
}


export const ButtonComponent: React.StatelessComponent<IButtonProps> = (props) => (
    <Button
        onPress={alert}
        title={props.text}
        accessibilityLabel="Learn more about this purple button"
    />
);
