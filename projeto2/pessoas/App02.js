import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Picker } from '@react-native-picker/picker';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pizza: 0,
            pizzas: [
                {key:1, nome:'Strogonoff', valor: 35.90},
                {key:2, nome:'Frango com Catupiry', valor: 30.90},
                {key:3, nome:'Portuguesa', valor: 25.90},
                {key:4, nome:'Calabresa', valor: 20.90},
                {key:5, nome:'Marguerita', valor: 15.90},
            ]
        };
    };

    render() {
        
        let pizzasItem = this.state.pizzas.map( (v, k) => {
            return <Picker.Item key={k} value={k} label={v.nome + ' R$ ' + v.valor} />
        })
        
        return(
            <View style={styles.container}>
                <Text style={styles.logo}>Menu Pizza</Text>

                <Picker
                style={styles.picker}
                selectedValue={this.state.pizza}
                onValueChange={ (itemValue, itemIndex) => this.setState({pizza: itemValue}) }
                >

                {pizzasItem}    
                </Picker>

                <Text style={styles.pizzas}>Você escolheu a pizza: {this.state.pizzas[this.state.pizza].nome}</Text>
                <Text style={styles.pizzas}>R$: {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
            </View>
        );
    }
            
    }

    const styles = StyleSheet.create({
        container:{
            flex: 1,
            marginTop: 30
        },

        logo:{
            textAlign: 'center',
            fontSize: 55,
            fontWeight: 'bold',
        },

        pizzas:{
            marginTop: 20,
            fontSize: 85,
            textAlign: 'center',
        },

        picker:{
            height: 80,
            fontSize: 25,
            marginVertical: 20,
            backgroundColor: '#f30000ff',
            color: '#fff'
        }
    });

