import RootStore from './RootStore';

export default class BasicStore {
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
      this.rootStore = rootStore;
    }
}
