import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import Row from "./components/row";
import Button from './components/button';
import React from 'react';
import { actions, initialState, reducer } from './reducer';


export default function App() {
  const [state, dispatch] = React.useReducer(reducer,initialState);

  return (
    <View style={styles.container}>
      <StatusBar/>
      <SafeAreaView>
      <Text style={styles.text}>{state.currentValue}</Text>
      <Row>
        <Button text="C" theme= "secondary" onPress={() => dispatch({type: actions.CLICK_C})}/>
        <Button text="+/-" theme= "secondary"/>
        <Button text="%" theme= "secondary" onPress={() => dispatch({type: actions.CLICK_OPERATOR, value: '%'})}/>
        <Button text="/" theme= "accent" onPress={() => dispatch({type: actions.CLICK_OPERATOR, value: '/'})}/>
      </Row>
      <Row>
        <Button text="7" onPress={() => dispatch({type: actions.CLICK_NUMBER, value: 7})}/>
        <Button text="8" onPress={() => dispatch({type: actions.CLICK_NUMBER, value: 8})}/>
        <Button text="9"onPress={() => dispatch({type: actions.CLICK_NUMBER, value: 9})}/>
        <Button text="x" theme= "accent" onPress={() => dispatch({type: actions.CLICK_OPERATOR, value: 'x'})}/>
      </Row>
      <Row>
        <Button text="4" onPress={() => dispatch({type: actions.CLICK_NUMBER, value: 4})}/>
        <Button text="5"onPress={() => dispatch({type: actions.CLICK_NUMBER, value: 5})}/>
        <Button text="6"onPress={() => dispatch({type: actions.CLICK_NUMBER, value: 6})}/>
        <Button text="-" theme= "accent" onPress={() => dispatch({type: actions.CLICK_OPERATOR, value: '-'})}/>
      </Row>
      <Row>
        <Button text="1" onPress={() => dispatch({type: actions.CLICK_NUMBER, value: 1})}/>
        <Button text="2" onPress={() => dispatch({type: actions.CLICK_NUMBER, value: 2})}/>
        <Button text="3" onPress={() => dispatch({type: actions.CLICK_NUMBER, value: 3})}/>
        <Button text="+" theme= "accent" onPress={() => dispatch({type: actions.CLICK_OPERATOR, value: '+'})} />
      </Row>
      <Row>
        <Button text="0" size=""double onPress={() => dispatch({type: actions.CLICK_NUMBER, value: 0})}/>
        <Button text="." onPress={() => dispatch({type: actions.CLICK_NUMBER, value: "."})}/>
        <Button text="=" theme= "secondary" onPress={() => dispatch({type: actions.CLICK_EQUAL})}/>
      </Row>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    padding: 20,
    justifyContent: "flex-end",
  },
  text: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  }
});
