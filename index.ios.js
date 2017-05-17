/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Checkbox from './checkbox/Checkbox';
import external from './de003.png';


export default class checkbox extends Component {
  render() {
    return (
      <View >
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>

          <Checkbox
              actionCallback={alert}
              label="good day"
              labelStyle={{fontWeight: "900"}}
              internalImgPath={external}
          />
      </View>
    );
  }
}

//label first
//{flexDirection: "row-reverse", justifyContent: "flex-end" }


//label above and center
//{flexDirection: "column-reverse", alignItems: "center" }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('checkbox', () => checkbox);
