import { observable, action } from 'mobx';
import { Animated } from 'reactxp';
import BasicStore from './BasicStore';

const splashHeaderTitles = [
  'starting/initializing',
  // 'starting/authenticating',
  'loading/loading something',
  // 'loading/loading something more',
  // 'loading/ok, I will finish loading now',
  'redirecting/redirecting',
  'redirecting/...',
];

export default class SplashStore extends BasicStore {
    @observable fadeOutAnim: Animated.Value = Animated.createValue(1.0);

    @observable splashVisible: boolean = true;

    @observable skipButtonVisible: boolean = false;

    @observable headerText: string = '';

    @action
    hideSplash = () => {
      this.splashVisible = false;
    };

    startHeaderTitleChange = (count = 0): void => {
      const {
        stores: {
          headerStore: { setHeaderTitle },
        },
      } = this.rootStore;

      if (count >= splashHeaderTitles.length) {
        this.startFadeOut();
      } else {
        setHeaderTitle(`lukaszchopin/${splashHeaderTitles[count]}`, true, () => this.startHeaderTitleChange(count + 1));
      }
    };

    @action
    startFadeOut = () => {
      const {
        headerStore: { setHeaderTitleForCurrRoute },
      } = this.rootStore.stores;
      this.skipButtonVisible = false;
      setHeaderTitleForCurrRoute();
      Animated.timing(this.fadeOutAnim, {
        toValue: 0.0,
        duration: 3000,
      }).start(() => {
        this.hideSplash();
      });
    };

    @action
    showSkipButton = () => {
      this.skipButtonVisible = true;
    };
}
