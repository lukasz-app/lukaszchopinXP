import { observable, action } from 'mobx';
import BasicStore from './BasicStore';

export default class InterfaceStore extends BasicStore {
    @observable screenWidth: number = 0;

    @observable screenHeight: number = 0;

    @action
    windowSizeChanged = ({ width, height }: { width: number; height: number }) => {
      this.screenWidth = width;
      this.screenHeight = height;
      console.log('Window size LAYOUT is: W=', width, ', H=', height);
    };
}
