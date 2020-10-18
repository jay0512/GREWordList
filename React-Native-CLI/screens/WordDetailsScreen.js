import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function WordDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Word Details!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: '100%',
  },
});
