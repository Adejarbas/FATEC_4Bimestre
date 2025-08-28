import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./assets/fechado.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ];
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length );
    this.setState({
      textoFrase: '" ' + this.frases[numeroAleatorio] + ' "',
      img: require('./assets/aberto.png')
    });
  }

  render(){
    return(
      <View style={styles.container}>

        <Image
          source={this.state.img}
          style={styles.img}
        />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#6A5ACD',
    fontStyle: 'italic',
    textAlign: 'center',
    margin: 30,
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#6A5ACD',
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  btnTexto: {
    color: '#6A5ACD',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default App;