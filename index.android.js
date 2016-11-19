/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, } from 'react-native';
import AwesomeNavigationBar from './components/view/awesome_navigation_bar';
import AwesomeTableView from './components/view/awesome_tableview';

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AwesomeNavigationBar title={"すごいタイトル"} />
        <AwesomeTableView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
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
    backgroundColor: '#3F51B5',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
