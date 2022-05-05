import React from 'react';
import {View} from 'react-native';

interface IProps {
    title:  string;
    onPress: () => void;
    accentColor?: string;
}

export default function Button({title, onPress, accentColor}: IProps) {
    return <View>
        <View/>
    </View>
}