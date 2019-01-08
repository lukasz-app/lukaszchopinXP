import React from 'react';
import { Component, View, Text } from 'reactxp';
import { inject, observer } from 'mobx-react';
import styles from './styles';
import TodoStore from '../../../stores/TodoStore';
import TodoList from '../TodoList/TodoList';
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
          </View>
          <TodoList todoStore={this.props.todoStore} />
        </View>
      );
    }
}
