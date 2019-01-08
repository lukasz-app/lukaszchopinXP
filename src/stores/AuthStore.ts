import { observable, action } from 'mobx';
import BasicStore from './BasicStore';

export default class AuthStore extends BasicStore {
    @observable
    token?: string = undefined;

    @observable authReady: boolean = false;

    @action
    login = () => {
      this.token = 'aaaa';
    };

    @action
    logout = () => {
      this.token = undefined;
    };

    runAuthChecks = () => {
      // mock hydrating auth token, or initializing new user
      console.log('run auth checks');
      setTimeout(this.setAuthReady, 200);
    };

    @action
    setAuthReady = () => {
      const {
        appStore: { setAppReady },
      } = this.rootStore.stores;
      console.log('set auth ready');
      this.authReady = true;
      setAppReady();
    };
}
