import React from 'react';
import { Component, View, Text } from 'reactxp';
import styles from './styles';

export default class Auth extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Auth</Text>
      </View>
    );
  }
}
