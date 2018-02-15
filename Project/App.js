/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  TextInput
} from 'react-native';

//import Person from './models/Person'

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
  super(props);
  this.state = { result: '' };
  this.guessNumber = this.guessNumber.bind(this);
  }

  guessNumber() {
    let number = parseInt(this.refs.number._lastNativeText);
    let result = Math.abs(number % 2) == 1 ? "ODD" : "EVEN";
    this.setState({ result })
  }

  render() {
    let person = new Person("Kushal", 201)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          V0.0.1 React-Native App!
        </Text>
        <Text style={styles.welcome}>
          { person.name } { person.isTall() }
        </Text>

        <TextInput
          placeholder="         "
          style={styles.inputNumber}
          ref="number"
        />

        <TouchableHighlight
         style={styles.button}
         onPress={this.guessNumber}
        >
         <Text> Check Odd/Even </Text>
        </TouchableHighlight>

        <Text>
          {this.state.result}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputNumber: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
});
