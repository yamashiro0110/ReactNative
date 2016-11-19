import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar'

export default class AwesomeNavigationBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <NavigationBar
        title={{ title: this.props.title, tintColor: '#ecf0f1', }}
        style={{ backgroundColor: "#2c3e50", }}
        statusBar={{ tintColor: "#2c3e50", backgroundColor: '#2c3e50' }}
        />
    );
  }
}
