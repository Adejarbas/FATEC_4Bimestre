import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Jobs(props) {
    return (
        <View>
            <Image
            source={{uri: props.img}}
            style={{ width: props.largura, height: props.altura }} />

            <Text style={{ fontSize: props.fonte }}> {props.fulano} </Text>
        </View>
    );
}