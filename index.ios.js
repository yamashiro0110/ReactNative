/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Navigator, TouchableHighlight, } from 'react-native';
import AwesomeSummary from './components/scenes/awesome_summary_scene';
// import AwesomeNavigationBar from './components/view/awesome_navigation_bar';
// import AwesomeTableView from './components/view/awesome_tableview';

export default class AwesomeProject extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <AwesomeSummary></AwesomeSummary>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  body: {
    backgroundColor: '#607D8B',
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
    backgroundColor: '#009688',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
