import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function App() {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function calcularImc(){
    let alt = altura / 100;
    let mass = peso; 
    let resultado = mass / (alt * alt);

    if(resultado < 18.5){
      alert("Abaixo do Peso " + resultado);
    }else if(resultado > 18.5 && resultado < 24.9){
      alert("Peso Normal :) " + resultado);
    }else if(resultado > 25){
      alert("Sobrepeso ")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calculadora IMC</Text>
      <View style={styles.infos}>
         <TextInput style={styles.inputPeso} placeholder="Peso (kg)" keyboardType="numeric" value={peso} onChangeText={(peso)=>{setPeso(peso)}}/>
         <TextInput style={styles.inputAltura} placeholder="Altura (mt)" keyboardType="numeric" value={altura} onChangeText={(altura)=>{setAltura(altura)}}/>
         <TouchableOpacity style={styles.inputButton} onPress={calcularImc}>
           <Text style={styles.buttonValue}>Calcular</Text>
         </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems:'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign:'center',
    marginTop: 76
  },
  infos:{
    width:250,
    height:100,
    alignItems:'center',
    marginTop:35
  },
  inputPeso:{
    width:200,
    height:30,
    backgroundColor:'white',
    borderRadius:5,
    paddingLeft:5
  },
  inputAltura:{
    width:200,
    height:30,
    backgroundColor:'white',
    borderRadius:5,
    paddingLeft:5,
    marginTop:20
  },
  inputButton:{
    width:200,
    height:30,
    backgroundColor:'orange',
    borderRadius:5,
    paddingLeft:5,
    marginTop:20
  },
  buttonValue:{
    color: 'white',
    textAlign:'center',
    marginTop:5
  }
});
