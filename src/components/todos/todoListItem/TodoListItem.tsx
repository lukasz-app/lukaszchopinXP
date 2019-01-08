import React from 'react';
import {
  Component, View, Text, Styles,
} from 'reactxp';
import { observer } from 'mobx-react';
import TodoStore, { TodoItemInfo } from '../../../stores/TodoStore';

interface Props {
    todoStore?: TodoStore;
    item: TodoItemInfo;
}

@observer
export default class TodoListItem extends Component<Props, {}> {
  render() {
    const { item } = this.props;
    console.log(item);
    return (
      <View
        style={Styles.createViewStyle({
          height: 20,
          margin: 2,
          borderColor: 'green',
          borderWidth: 1,
        })}
      >
        <Text
          style={Styles.createTextStyle({
            color: 'black',
          })}
        >
          {item.text}
        </Text>
      </View>
    );
  }
}
