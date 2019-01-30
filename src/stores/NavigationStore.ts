// import {
//     NavigationActions,
//     StackActions,
//     NavigationState,
//     NavigationNavigator,
//     NavigationScreenProp,
// } from 'react-navigation';
import { action, observable, computed } from 'mobx';
import { Animated } from 'reactxp';
import BasicStore from './BasicStore';

export type BottomRoute = 'ME' | 'WORK' | 'CONTACT';
export type MainRoute = 'SPLASH' | 'HOME';
// function getCurrentState(state: NavigationState):string {
//     const childRoute = state.routes[state.index];
//     if (childRoute.routes) {
//         return getCurrentState(childRoute);
//     }
//     return childRoute;
// }
// function getPrevState(state: NavigationState) {
//     const childRoute = state.routes[state.index];
//     const childRoutePrev = state.index === 0 ? {} : state.routes[state.index - 1];
//     if (childRoute.routes) {
//         return getPrevState(childRoute);
//     }
//     return childRoutePrev;
// }

const screenAnimationDuration: number = 1500;
export default class NavigationStore extends BasicStore {
  // navigator?: NavigationScreenProp<NavigationState>;

    @observable bottomRoutes: BottomRoute[] = ['ME', 'WORK', 'CONTACT'];

    @observable currentRouteName: BottomRoute = this.bottomRoutes[0];

    @observable prevRouteName: BottomRoute = this.bottomRoutes[0];

    @observable animationInProgress: boolean = false;

    @observable screenTransitionAnimatedValue = Animated.createValue(0.0);

    // setNavigator = navigator => {
    //     this.navigator = navigator;
    // };

    // goBack = (key: string) => {
    //     this.navigator.dispatch(
    //         NavigationActions.back({
    //             key,
    //         })
    //     );
    // };

    // navigate = (routeName: string, params?: object, navAction?: object) => {
    //     this.navigator.dispatch(
    //         NavigationActions.navigate({
    //             routeName,
    //             params,
    //         })
    //     );
    // };

    // @action
    // onNavigationStateChange = (prevState, newState, navAction) => {
    //     this.setCurrentRouteName(this.getCurrentRouteName());
    // };

    // getCurrentRouteName = () =>
    //     this.navigator && getCurrentState(this.navigator.state.nav).routeName;

    // getPrevRouteName = () => this.navigator && getPrevState(this.navigator.state.nav).routeName;

    // @action
    // clearStore = () => {
    //     // this.navigator = null;
    // };

    navigate = (route?: BottomRoute): void => {
      this.setCurrentRouteName(route);
    };

    @action
    setCurrentRouteName = (routeName: BottomRoute) => {
      if (routeName === this.currentRouteName) {
        return;
      }
      this.prevRouteName = this.currentRouteName;
      this.currentRouteName = routeName;
      this.rootStore.stores.headerStore.setHeaderTitleForCurrRoute();
      this.screenTransitionAnimatedValue = Animated.createValue(0.0);
      Animated.timing(this.screenTransitionAnimatedValue, {
        duration: screenAnimationDuration,
        toValue: 1,
      }).start();
    };

    // @action
    // setCurrentRouteIndex = (rootIndex: number) => {
    //   this.setCurrentRouteName(this.bottomRoutes[rootIndex]);
    // };

    @computed
    get currentBottomRouteIndex() {
      return this.bottomRoutes.findIndex(route => route === this.currentRouteName);
    }
}
