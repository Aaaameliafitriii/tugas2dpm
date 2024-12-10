import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {
  const [isLampOn, setIsLampOn] = useState(false);

  const toggleLamp = () => {
    setIsLampOn(!isLampOn);
  };

  return (
    <View style={[styles.container, { backgroundColor: isLampOn ? '#FFFF99' : '#333333' }]}>
      <Text style={styles.text}>
        {isLampOn ? 'Lampu Menyala' : 'Lampu Mati'}
      </Text>
      <TouchableOpacity style={styles.button} onPress={toggleLamp}>
        <Text style={styles.buttonText}>
          {isLampOn ? 'Matikan Lampu' : 'Nyalakan Lampu'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#FFF',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default App;

