import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [partido, setPartido] = useState(0);
  const [resultado, setResultado] = useState('');

  MostrarResultado = () => {
    var s = 'Hola ' + nombre + ', tu partido político de preferencia es: ';
    if (partido == 0) {
      s = s + 'Morena';
    }
    if (partido == 1) {
      s = s + 'Acción Nacional';
    }
    if (partido == 2) {
      s = s + 'Revolucionario Institucional';
    }
    if (partido == 3) {
      s = s + 'Movimiento Ciudadano';
    }
    if (partido == 4) {
      s = s + 'Independientes';
    }
    setResultado(s);
  };

  var radio_props = [
    { label: 'Morena', value: 0 },
    { label: 'Acción Nacional', value: 1 },
    { label: 'Revolucionario Institucional', value: 2 },
    { label: 'Movimiento Ciudadano', value: 3 },
    { label: 'Independientes', value: 4 },
  ];

  return (
    <View style={{ padding: 10, fontSize: 24 }}>
      <Text
        style={{
          padding: 15,
          fontSize: 24,
          backgroundColor: 'orange',
          color: 'white',
          textAlign: 'center',
        }}>
        Preferencias Políticas
      </Text>

      <TextInput
        style={{
          height: 40,
          backgroundColor: 'blueviolet',
          color: 'white',
          fontWeight: 'bold',
          borderColor: 'green',
          borderWidth: 2,
          padding: 5,
          marginTop: 10,
        }}
        placeholder="Nombre"
        placeholderTextColor="white"
        onChangeText={(nombre) => setNombre(nombre)}
      />

      <RadioForm
        style={{ marginTop: 10 }}
        radio_props={radio_props}
        initial={0}
        onPress={(value) => {
          setPartido(value);
        }}
      />

      <TouchableOpacity
        style={{
          height: 60,
          backgroundColor: 'blue',
          marginTop: 10,
          borderRadius: 30,
        }}
        onPress={() => {
          this.MostrarResultado();
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 24,
            textAlignVertical: 'center',
            textAlign: 'center',
            padding:10,
          }}>
          Mostrar Resultado
        </Text>
      </TouchableOpacity>

      <Text style={{ padding: 10, fontSize: 32 }}>{resultado}</Text>
    </View>
  );
}
