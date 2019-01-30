import React from 'react';
import { Component, View, Styles } from 'reactxp';
import { inject, observer } from 'mobx-react';
import { ViewOnLayoutEvent } from 'reactxp/dist/common/Types';
import { Home, Splash } from './containers';
import { withStoreProvider, withDevMenuTrigger } from './enhancers';
import RootStore from './stores/RootStore';
import AppStore from './stores/AppStore';
import InterfaceStore from './stores/InterfaceStore';
import HeaderStore from './stores/HeaderStore';
import { GeneralAnimatedBackground, Header } from './components';
import NavigationStore from './stores/NavigationStore';

interface Props {
    appStore?: AppStore;
    interfaceStore?: InterfaceStore;
    headerStore?: HeaderStore;
    navigationStore?: NavigationStore;
}

const rootStyles = Styles.createViewStyle({
  flex: 1,
  alignSelf: 'stretch',
  backgroundColor: 'blue',
});

@withDevMenuTrigger
@withStoreProvider(new RootStore())
@inject('appStore', 'headerStore', 'navigationStore', 'interfaceStore')
@observer
export default class App extends Component<Props, any> {
  componentDidMount() {
    const {
      appStore: { initApp },
    } = this.props;
    initApp();
  }

    onRootLayout = (event: ViewOnLayoutEvent) => {
      const { windowSizeChanged } = this.props.interfaceStore;
      windowSizeChanged(event);
    };

    render() {
      const {
        appStore: { appReady },
        headerStore: { headerTitle, headerTitleSections },
      } = this.props;
      return (
        <View style={rootStyles} onLayout={this.onRootLayout}>
          <GeneralAnimatedBackground />
          <Home />
          <Splash appReady={appReady} />
          <Header title={headerTitle} titleSections={headerTitleSections} />
        </View>
      );
    }
}
