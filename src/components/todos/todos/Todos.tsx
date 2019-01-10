import React from 'react';
import { Component, View, Text } from 'reactxp';
import { inject, observer } from 'mobx-react';
import styles from './styles';
import TodoStore from '../../../stores/TodoStore';
import TodoList from '../todoList/TodoList';
import { Button } from '../..';

interface Props {
    todoStore?: TodoStore;
}

@inject('todoStore')
@observer
export default class TodosComponent extends Component<Props, {}> {
    onAddPressed = () => {
      const { add } = this.props.todoStore;
      add();
    };

    onSubtreactPressed = () => {
      const { subtract } = this.props.todoStore;
      subtract();
    };

    render() {
      const { unfinishedCount } = this.props.todoStore;
      return (
        <View style={styles.container}>
          <Text style={styles.titleText}>This is TODOS component</Text>
          <Text style={styles.unreadText}>
            {`You have ${unfinishedCount} unfinished ToDos`}
          </Text>
          <View style={styles.buttonsContainer}>
            <Button label="ADD" onPress={this.onAddPressed} />
            <Button label="subtract" onPress={this.onSubtreactPressed} />
          </View>
          <TodoList todoStore={this.props.todoStore} />
        </View>
      );
    }
}
