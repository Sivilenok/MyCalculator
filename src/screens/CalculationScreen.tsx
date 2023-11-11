import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {Operations} from '../interfaces';
import {CleanButton, NumberButton, OperationButton} from '../components';
// TouchableOpacity предназначен для создания нажимаемой области

export const CalculationScreen = ({navigation}: any) => {
  const [result, setResult] = useState<number | undefined>();
  const [currentOperation, setCurrentOperation] = useState<Operations>();
  const [history, setHistory] = useState<string[]>([]);

  const clean = () => {
    setResult(undefined);
    setCurrentOperation(undefined);
  };

  const goToHistory = () => {
    navigation.push('History', {history: history});
  };

  const operations = (number: number) => {
    console.log(number);

    if (!result) {
      setResult(number);
      return;
    }

    switch (currentOperation) {
      case Operations.divide:
        setHistory(prev => [
          ...prev,
          `${result} / ${number} = ${result / number}`,
        ]);
        setResult(result / number);
        setCurrentOperation(undefined);
        break;
      case Operations.minus:
        setHistory(prev => [
          ...prev,
          `${result} - ${number} = ${result - number}`,
        ]);
        setResult(result - number);
        setCurrentOperation(undefined);
        break;
      case Operations.plus:
        setHistory(prev => [
          ...prev,
          `${result} + ${number} = ${result + number}`,
        ]);
        setResult(result + number);
        setCurrentOperation(undefined);
        break;
      case Operations.multiply:
        setHistory(prev => [
          ...prev,
          `${result} * ${number} = ${result * number}`,
        ]);
        setResult(result * number);
        setCurrentOperation(undefined);
        break;
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.resultRow}>{result}</Text>
      <View style={styles.calculationsButtons}>
        <NumberButton value={0} onPress={operations} />
        <NumberButton value={1} onPress={operations} />
        <NumberButton value={2} onPress={operations} />
        <NumberButton value={3} onPress={operations} />
        <OperationButton
          value={Operations.minus}
          onPress={setCurrentOperation}
        />
      </View>
      <View style={styles.calculationsButtons}>
        <NumberButton value={4} onPress={operations} />
        <NumberButton value={5} onPress={operations} />
        <NumberButton value={6} onPress={operations} />
        <NumberButton value={7} onPress={operations} />
        <OperationButton
          value={Operations.plus}
          onPress={setCurrentOperation}
        />
      </View>
      <View style={styles.calculationsButtons}>
        <NumberButton value={8} onPress={operations} />
        <NumberButton value={9} onPress={operations} />
        <OperationButton
          value={Operations.divide}
          onPress={setCurrentOperation}
        />
        <OperationButton
          value={Operations.multiply}
          onPress={setCurrentOperation}
        />
        <CleanButton value="C" onPress={clean} />
      </View>
      <TouchableOpacity style={styles.button} onPress={goToHistory}>
        <Text style={styles.text}>History</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
  },
  resultRow: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  calculationsButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'red',
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
