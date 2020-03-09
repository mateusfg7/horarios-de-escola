import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import horarioHoje from './utils/horarios'

export default function App() {
  
  const renderItem = ({ item }) => {
    return (
      <Text style={styles.item}>{item}</Text>
    )
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>HORÁRIOS</Text>
      <FlatList
        contentContainerStyle={styles.containerList}
        data={horarioHoje}
        renderItem={item => renderItem(item)}
      />
    </View>
  );
}

App.navi

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1e1f1c',
    color: '#fff',
    width: '100%',
    textAlign: 'center',
    fontSize: 40,
    paddingTop: 30
  },
  container: {
    flex: 1,
    backgroundColor: '#272822',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerList: {
    flex: 1,
    borderColor: '#1e1f1c',
    borderWidth: 15,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 360
  },
  item: {
    color: '#fff',
    fontSize: 30,
    borderColor: '#414339',
    borderWidth: 4,
    borderRadius: 120,
    width: 200,
    textAlign: 'center',
    margin: 10,
    padding: 5,
  }
});
