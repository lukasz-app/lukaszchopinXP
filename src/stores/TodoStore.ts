import { action, observable, computed } from 'mobx';
import { VirtualListViewItemInfo } from 'reactxp-virtuallistview';
import BasicStore from './BasicStore';

// Extend VirtualListViewItemInfo to include display text
export interface TodoItemInfo extends VirtualListViewItemInfo {
    text: string;
}

function randString() {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < Math.floor(Math.random() * 10) + 1; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export default class TodoStore extends BasicStore {
    @observable.shallow items: TodoItemInfo[] = [];

    @action
    add = () => {
      console.log('add');
      // this.count = this.count + 1;
      const text = randString();
      this.items.push({
        text,
        template: 'todo',
        height: 20,
        key: `${text} ${this.items.length}`,
      });
    };

    @computed
    get unfinishedCount() {
      return this.items.length;
    }
}
