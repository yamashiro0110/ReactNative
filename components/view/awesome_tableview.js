import React, { Component } from 'react';
import { AppRegistry, StyleSheet, ListView, Text, View, TouchableHighlight } from 'react-native';
import AwesomeCell from './awesome_tableview_cell';

export default class AwesomeTableView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: this._dataSource()
    };
  }

  _listViewDataSource() {
    return new ListView.DataSource({
      rowHasChanged: (r1, r2) => (r1 !== r2)
    });
  }

  _dataSource() {
    let values = this._values();
    let dataSource = this._listViewDataSource();
    return dataSource.cloneWithRows(values);
  }

  _values() {
    return [
      {id: 0, value: 'hoge'},
      {id: 1, value: 'fuga'},
      {id: 2, value: 'piyo'},
    ];
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => (
            <AwesomeCell
              text={rowData.value}
              onSelected={() => {
                this.props.navigator.push({
                  title: 'title' + rowData.id
                });
              }}
              ></AwesomeCell>
          )}
        />
    );
  }
}
