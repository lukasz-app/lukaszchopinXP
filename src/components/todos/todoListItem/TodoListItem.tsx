import React from 'react';
import { Component, View, Text } from 'reactxp';
// import { observer } from 'mobx-react';
import TodoStore, { TodoItemInfo } from '../../../stores/TodoStore';
import styles from './styles';

interface Props {
    todoStore?: TodoStore;
    item: TodoItemInfo;
}

// @observer
export default class TodoListItem extends Component<Props, {}> {
  render() {
    const { item } = this.props;
    console.log(item);
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{item.text}</Text>
      </View>
    );
  }
}
