import React from 'react';
import {
  Component,  View, Styles,
} from 'reactxp';
import { inject, observer } from 'mobx-react';
import { ViewOnLayoutEvent } from 'reactxp/dist/common/Types';
import { Home, Splash } from './containers';
import { withStoreProvider, withDevMenuTrigger } from './enhancers';
import RootStore from './stores/RootStore';
import AppStore from './stores/AppStore';
import InterfaceStore from './stores/InterfaceStore';

interface Props {
    appStore?: AppStore;
    interfaceStore: InterfaceStore;
}

@withDevMenuTrigger
@withStoreProvider(new RootStore())
@inject('appStore', 'interfaceStore')
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
      } = this.props;
      return (
        <View
          style={Styles.createViewStyle({
            flex: 1,
            alignSelf: 'stretch',
          })}
          onLayout={this.onRootLayout}
        >
          {appReady ? <Home /> : <Splash />}
        </View>
      );
    }
}
