import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import ButtonEntar from '../../components/buttons/buttonEntrar'

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image style={styles.img} source={require('../../assets/img/imgHome.png')}/>
      <View style={styles.card}>
        <Text style={styles.titulo}>
          Olá, seja bem-vindo ao 
          nosso quastionário!
        </Text>
        <Text style={styles.text}>
          Para iniciar informe seu token que te enviamos no seu e-mail empresarial, ele garantirá a sua confidencialidade.
        </Text>
        <Text style={styles.label}>
          Token:
        </Text>
        <TextInput style={styles.textInput} placeholder="Informe o seu Token ..."/>
        <ButtonEntar/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    width: '100%',
    backgroundColor: '#e4edf6',
    alignItems: 'center',
    paddingTop: 0,
    justifyContent: 'flex-end',
  },
  card:{
    backgroundColor: '#fff',
    borderTopStartRadius: 35,
    borderTopRightRadius: 35,
    width: '100%',
    height: '55%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 0,
  },
  titulo: {
    fontSize: 25,
    color: '#585555',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '78%',
    padding: 12,
  },
  text: {
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '75%',
    fontSize: 16,
    color: '#2F2828',
    marginBottom: 7,
  },
  label: {
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '75%',
    fontSize: 16,
    color: '#2F2828',
    marginBottom: 2
  },
  textInput: {
    backgroundColor: '#E5E5E5',
    width: '75%',
    borderRadius: 5,
    padding: 8,
    marginBottom: 210,
  },
  button: {
    width: 800,
    backgroundColor: "#fff"
  },
  img: {
    flex: 1,
    display: 'flex',
    width: '75%',
    marginBottom: -95,  
  }
});
