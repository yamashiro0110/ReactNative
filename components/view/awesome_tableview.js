import React, { Component } from 'react';
import { AppRegistry, StyleSheet, ListView, Text, View, } from 'react-native';

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
    return [ 'hoge', 'fuga', 'piyo' ];
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => (
            <AwesomeCell text={rowData}></AwesomeCell>
          )}
        />
    );
  }
}

class AwesomeCell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={cellStyles.container}>
        <Text style={cellStyles.text}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}

const cellStyles = StyleSheet.create({
  container: {
    flex: 1,
    // borderTopWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#7f8c8d',
    backgroundColor: '#ecf0f1',
    height: 60,
  },
  text: {
    padding: 8,
    fontSize: 16,
    textAlign: 'left',
  },
});
