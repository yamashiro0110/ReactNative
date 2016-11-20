import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class AwesomeCell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={cellStyles.container}>
        <TouchableHighlight onPress={this.props.onSelected}>
          <Text style={cellStyles.text}>
            {this.props.text}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const cellStyles = StyleSheet.create({
  container: {
    flex: 1,
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
