import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [ika, setIka] = useState('');
  const [alapaine, setAlap] = useState(NaN);
  const [ylapaine, setYlap] = useState(NaN);

  const handleCalculation = (text) => {
    const number = parseFloat(text);

    if (!isNaN(number)) {
      const alapaineValue = (220 - number) * 0.65;
      setAlap(alapaineValue);

      const ylapaineValue = (220 - number) * 0.85;
      setYlap(ylapaineValue);
    } else {
      setAlap(NaN); // Set them back to NaN
      setYlap(NaN); // Set them back to NaN
    }
    setIka(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        placeholder="Syota ika"
        keyboardType="decimal-pad"
        value={ika}
        onChangeText={handleCalculation}
        style={styles.field}
      />
      <Text style={styles.field}>Hr limits</Text>
      <Text style={styles.field}>
        {isNaN(alapaine) ? 'Ei' : alapaine.toFixed(0)} {'-'}
        {isNaN(ylapaine) ? 'toimi' : ylapaine.toFixed(0)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  field: {
    marginBottom: 10,
  },
});