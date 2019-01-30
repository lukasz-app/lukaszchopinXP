import { configure } from 'mobx';
import AppStore from './AppStore';
import AuthStore from './AuthStore';
import NavigationStore from './NavigationStore';
import TodoStore from './TodoStore';
import InterfaceStore from './InterfaceStore';
import SplashStore from './SplashStore';
import HeaderStore from './HeaderStore';

configure({
  enforceActions: true,
});

interface Stores {
    appStore: AppStore;
    authStore: AuthStore;
    navigationStore: NavigationStore;
    todoStore: TodoStore;
    interfaceStore: InterfaceStore;
    splashStore: SplashStore;
    headerStore: HeaderStore;
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
        splashStore: new SplashStore(this),
        headerStore: new HeaderStore(this),
      };
    }
}

export default RootStore;
