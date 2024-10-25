import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text>React Native App</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
