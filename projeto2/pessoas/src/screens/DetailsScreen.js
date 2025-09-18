import React from "react";
import { View, Text } from "react-native";

export default function DetailScreen({ route }) {

    // Recebendo os parametros "itemId" 
    const { itemId } = route.params;

    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Telas de detalhe</Text>
            <Text>ID do item: {itemId}</Text>
        </View>
    );
}