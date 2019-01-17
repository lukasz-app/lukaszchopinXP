// import {
//     NavigationActions,
//     StackActions,
//     NavigationState,
//     NavigationNavigator,
//     NavigationScreenProp,
// } from 'react-navigation';
import { action, observable, computed } from 'mobx';
import BasicStore from './BasicStore';

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
export default class NavigationStore extends BasicStore {
  // navigator?: NavigationScreenProp<NavigationState>;

    @observable bottomRoutes = ['ME', 'WORK', 'CONTACT'];

    @observable currentRouteName: string = this.bottomRoutes[0];

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

    @action
    setCurrentRouteName = (routeName: string) => {
      this.currentRouteName = routeName;
    };

    @computed
    get currentBottomRouteIndex() {
      return this.bottomRoutes.findIndex(route => route === this.currentRouteName);
    }
}
