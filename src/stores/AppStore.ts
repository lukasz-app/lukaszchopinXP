import { action, observable } from 'mobx';
import BasicStore from './BasicStore';

export default class AppStore extends BasicStore {
    @observable appReady: boolean = false;

    @action
    initApp = () => {
      const {
        authStore: { runAuthChecks },
        // navigationStore: { navigate },
      } = this.rootStore.stores;
      console.log('init App');
      runAuthChecks();
    };

    @action
    setAppReady = () => {
      console.log('set app ready');
      this.appReady = true;
    };
}
