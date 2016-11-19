import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';
import AwesomeNavigationBar from '../view/awesome_navigation_bar';
import AwesomeTableView from '../view/awesome_tableview';

export default class AwesomeSummary extends Component {
  render() {
    return (
      <View style={{ flex: 1, }}>
        <AwesomeNavigationBar title="すごいタイトル" />
        <AwesomeTableView />
      </View>
    );
  }
}
