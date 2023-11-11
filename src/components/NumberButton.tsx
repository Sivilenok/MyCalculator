import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface INumberComponent {
  value: number;
  onPress: (value: number) => void;
}

export const NumberButton = ({value, onPress}: INumberComponent) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(value)}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#dadce0',
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
