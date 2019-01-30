import { observable, action, computed } from 'mobx';
import { StatusBar } from 'reactxp';
import BasicStore from './BasicStore';

export default class InterfaceStore extends BasicStore {
    @observable screenWidth: number = 1;

    @observable screenHeight: number = 1;

    @action
    windowSizeChanged = ({ width, height }: { width: number; height: number }) => {
      this.screenWidth = width;
      this.screenHeight = height;
      console.log('Winodow size changed : ', width, ' ', height);
    };

    initInterface = () => {
      StatusBar.setBackgroundColor('#00000000', false);
      StatusBar.setTranslucent(true);
    };

    @computed
    get screenRatio() {
      return this.screenWidth / this.screenHeight;
    }
}
