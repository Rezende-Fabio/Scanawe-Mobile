import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.card}>
        <Text style={styles.titulo}>
          Olá, seja bem-vindo ao 
          nosso quastionário!
        </Text>
        <Text style={styles.text}>
          Para iniciar informe seu token que te enviamos no seu e-mail empresarial, ele garantirá a sua confidencialidade.
        </Text>
        <Text style={styles.text}>
          Token:
        </Text>
        <TextInput style={styles.textInput} placeholder="Informe o seu Token ..."/>
        <Button style={styles.button} title="Press Me"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    width: '100%',
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: 36,
    justifyContent: 'flex-end',
  },
  card:{
    backgroundColor: '#fff',
    borderTopStartRadius: 35,
    borderTopRightRadius: 35,
    width: '100%',
    height: '45%',
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
    width: '65%',
    padding: 12,
  },
  text: {
    padding: 15,

  },
  textInput: {
    backgroundColor: '#E5E5E5',
    width: '75%',
    borderRadius: 5,
    padding: 8,
  },
  button: {
    marginTop: 10,
    width: '25%',
  }
});
