/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component, PropTypes } from 'react';
import { AppRegistry, StyleSheet, View, NavigatorIOS, TouchableHighlight, Text, } from 'react-native';
// import AwesomeSummary from './components/scenes/awesome_summary_scene';
// import AwesomeNavigationBar from './components/view/awesome_navigation_bar';
// import AwesomeTableView from './components/view/awesome_tableview';

export default class AwesomeProject extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'My Initial Scene',
        }}
        style={{flex: 1}}
        barTintColor='#ffffcc'
        />
    );
  }
}

class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  // constructor() {
  //   this.props.title = 'My Initial Scene';
  // }

  _onForward = () => {
    this.props.navigator.push({
      title: 'Scene ' + nextIndex,
    });
  }

  render() {
    return (
      <View>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this._onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
      </View>
    )
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
