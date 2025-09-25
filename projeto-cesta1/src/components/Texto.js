import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({ children, style }) {
    let estilo = estilos.texto;

    if (style?.fontWeight === "bold") {
        estilo = estilos.textoNegrito;
    }
    return <Text style={[estilo, style]}>{children}</Text>;
}

const estilos = StyleSheet.create({
    texto: {
        fontSize: 16,
        lineHeight: 26,
        color: "#464646",
    },
    textoNegrito: {
        fontWeight: "bold",
    },
});