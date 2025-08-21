import React from "react";
import { View, Text } from "react-native";
import { Component } from "react";

class App extends Component{
    render() {
        return(
            <View style={{flex:1, flexDirection: 'column', alignItems: 'stretch'}}>

                <View style={{width: 150, height: 150, backgroundColor: 'red'}}>a</View>

                <View style={{width: 50, height: 50, backgroundColor: 'green'}}>a</View>

                <View style={{width: 150, height: 150, backgroundColor: 'yellow'}}>a</View>

            </View>
        );
    }
}

export default App;