import { configure } from 'mobx';
import AppStore from './AppStore';
import AuthStore from './AuthStore';
import NavigationStore from './NavigationStore';
import TodoStore from './TodoStore';
import InterfaceStore from './InterfaceStore';

configure({
  enforceActions: true,
});

interface Stores {
    appStore: AppStore;
    authStore: AuthStore;
    navigationStore: NavigationStore;
    todoStore: TodoStore;
    interfaceStore: InterfaceStore;
}

class RootStore {
    stores: Stores;

    constructor() {
      this.stores = {
        appStore: new AppStore(this),
        authStore: new AuthStore(this),
        navigationStore: new NavigationStore(this),
        todoStore: new TodoStore(this),
        interfaceStore: new InterfaceStore(this),
      };
    }
}

export default RootStore;
