import React from "react";
import { StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [text, onChangeText] = React.useState("Useless Text");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sakay Queue</Text>
      <Text style={styles.description}>Username</Text>
      <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
      />
      <Text style={styles.description}>Password</Text>
      <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
      />
      {/*<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />*/}
      {/*<EditScreenInfo path="/screens/TabOneScreen.tsx" />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});
