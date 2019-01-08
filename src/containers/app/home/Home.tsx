import React from 'react';
import { Component, View, Text } from 'reactxp';
import { inject, observer } from 'mobx-react';
import styles from './styles';
import TodosComponent from '../../../components/todos/todos/Todos';

@inject('appStore')
@observer
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>This is Home</Text>
        <TodosComponent />
      </View>
    );
  }
}
