import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import RootStore from '../stores/RootStore';

const withStoreProvider = (root: RootStore) => (WrappedComponent: typeof Component): any => class StoreProvider extends Component<any, any> {
        rootStore: RootStore;

        constructor(props: any) {
          super(props);
          this.rootStore = root;
        }

        render() {
          return (
            <Provider {...this.rootStore.stores}>
              <WrappedComponent {...this.props} />
            </Provider>
          );
        }
};

export default withStoreProvider;
