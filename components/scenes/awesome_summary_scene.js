import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';
import AwesomeNavigationBar from '../view/awesome_navigation_bar';
import AwesomeTableView from '../view/awesome_tableview';

export default class AwesomeSummary extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{title: 'title', index: 0}}
        renderScene={(route, navigator) =>
          <AwesomeTableView
            onSelectedCell={() => {
              let nextIndex = route.index + 1;
              let title = 'title:' + nextIndex;
              navigator.push({
                title: title,
                index: nextIndex,
              });
            }}
            ></AwesomeTableView>
        }></Navigator>
    );
  }
}
