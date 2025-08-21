import { Component } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

class App extends Component {
    render() {
        let nome = 'Steve';

        return(
            <View style={{ marginTop: 20 }}>

                <Text style={styles.textoPrincipal}>Eu sou texto 1</Text>
                <Text style={styles.textoSecundario}>Eu sou texto 2</Text>
                <Text style={styles.textoTerceiro}>Eu sou texto 3</Text>
                <Text style={styles.textoQuarto}>Eu sou texto 4</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textoPrincipal: {
        fontSize: 25,
        color: 'green'
    },
    textoSecundario: {
        fontSize: 20,
        color: 'blue'
    },
    textoTerceiro:{
        fontSize: 40,
        color: 'red'
    },
    textoQuarto:{
        fontSize: 15,
        color: 'purple'
    }})

export default App;