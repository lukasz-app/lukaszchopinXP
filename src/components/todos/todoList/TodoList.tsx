import React from 'react';
import { Component, View, Text } from 'reactxp';
import { observer } from 'mobx-react';
import { VirtualListView } from 'reactxp-virtuallistview';
import styles from './styles';
import TodoStore, { TodoItemInfo } from '../../../stores/TodoStore';
import TodoListItem from '../todoListItem/TodoListItem';

interface Props {
    todoStore: TodoStore;
}

@observer
export default class TodoList extends Component<Props, {}> {
    renderItem = (item: TodoItemInfo) => <TodoListItem item={item} />;

    render() {
      const { todos } = this.props.todoStore;
      console.log('list container render');
      return (
        <View style={styles.container}>
          {/* <Text style={styles.titleText}>This is TODOS list</Text> */}
          <VirtualListView
            itemList={todos}
            renderItem={this.renderItem}
            style={styles.list}
          />
        </View>
      );
    }
}
