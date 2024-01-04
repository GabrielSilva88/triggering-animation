import React, { Component } from 'react';
import { Animated, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      larAnimado: new Animated.Value(150),
      altAnimado: new Animated.Value(35),
      opAnimada: new Animated.Value(0)
    };
    this.carregarGrafico = this.carregarGrafico.bind(this);
  }

  carregarGrafico(){
    
    Animated.sequence([
      Animated.timing(
        this.state.opAnimada,
        {
          toValue: 1,
          duration: 400
        }
      ),
      Animated.timing(
        this.state.altAnimado,
        {
          toValue: 300,
          duration: 1000
        }
      )
    ]).start();
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>

        <View style={{
          height: 80,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          backgroundColor: '#4169'
        }}>

          <TouchableOpacity onPress={this.carregarGrafico}>
            <Text style={{ fontSize: 25, color: '#FFFFFF' }}>
              Gerar Grafico
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Text style={{fontSize:30, }}>Vendas</Text>
          <Animated.View style={{
            width: this.state.larAnimado,
            height: this.state.altAnimado,
            backgroundColor: '#4169E1',
            justifyContent: 'center',
            borderRadius: 25
          }}>

            <Text style={{
              color: '#FFFFFF',
              fontSize: 20,
              textAlign: 'center',
            }}>
              R$ 150,00
            </Text>
          </Animated.View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
