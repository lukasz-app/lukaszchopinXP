import { observable, action, computed } from 'mobx';
import BasicStore from './BasicStore';

const baseHeaderTitle = 'lukaszchopin/';

export default class HeaderStore extends BasicStore {

    @observable currentHeaderTitle: string = '';

    @observable headerTitleChangeInProgress: boolean = false;

    setHeaderTitleForCurrRoute = () => {
      const { currentRouteName } = this.rootStore.stores.navigationStore;
      this.setHeaderTitle(baseHeaderTitle + currentRouteName, true);
    };

    @action
    setHeaderTitle = (title: string, animate?: boolean, callback?: () => void) => {
      if (!animate) {
        this.currentHeaderTitle = title;
      } else {
        this.setHeaderTitleAnim(title, this.currentHeaderTitle, false, callback);
      }
    };

    @action
    setHeaderTitleAnim(
      toTitle: string,
      currentHeaderTitle: string,
      dir: boolean,
      callback: () => void,
    ) {
      this.currentHeaderTitle = currentHeaderTitle;

      if (toTitle === currentHeaderTitle) {
        if (callback) {
          callback();
        }
        return;
      }
      const newDir = toTitle.indexOf(currentHeaderTitle) === 0 || currentHeaderTitle.length === 0 || dir;
      setTimeout(
        () => this.setHeaderTitleAnim(
          toTitle,
          newDir
            ? currentHeaderTitle + toTitle.charAt(currentHeaderTitle.length)
            : currentHeaderTitle.substr(0, currentHeaderTitle.length - 1),
          newDir,
          callback,
        ),
        80,
      );
    }

    @computed
    get headerTitle() {
      return this.currentHeaderTitle;
    }

    @computed
    get headerTitleSections() {
      return this.currentHeaderTitle.split('/').reverse();
    }

    @computed
    get screenRatio() {
      return this.screenWidth / this.screenHeight;
    }
}
