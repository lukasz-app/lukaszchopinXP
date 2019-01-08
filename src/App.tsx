import React from 'react';
import { Component } from 'reactxp';
import { inject, observer } from 'mobx-react';
import { Home, Splash } from './containers';
import withStoreProvider from './enhancers/withStoreProvider';
import RootStore from './stores/RootStore';
import AppStore from './stores/AppStore';

interface Props {
    appStore?: AppStore;
}

@withStoreProvider(new RootStore())
@inject('appStore')
@observer
export default class App extends Component<Props, any> {
  componentDidMount() {
    const {
      appStore: { initApp },
    } = this.props;
    initApp();
  }

  render() {
    const {
      appStore: { appReady },
    } = this.props;
    if (appReady) {
      return <Home />;
    }
    return <Splash />;
  }
}
