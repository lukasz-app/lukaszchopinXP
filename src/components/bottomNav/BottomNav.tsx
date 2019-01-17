import React from 'react';
import { Component, View, Text } from 'reactxp';
import { inject, observer } from 'mobx-react';
import styles from './styles';
import BottomNavButton from './BottomNavButton';
import BottomNavUnderline from './BottomNavUnderline';
import NavigationStore from '../../stores/NavigationStore';
import InterfaceStore from '../../stores/InterfaceStore';

interface Props {
    navigationStore?: NavigationStore;
    interfaceStore?: InterfaceStore;
}

@inject('navigationStore', 'interfaceStore')
@observer
export default class BottomNav extends Component<Props, {}> {
  render() {
    const {
      navigationStore: { setCurrentRouteName, currentBottomRouteIndex, bottomRoutes },
      interfaceStore: { screenWidth },
    } = this.props;
    return (
      <View style={styles.container}>
        <BottomNavUnderline
          index={currentBottomRouteIndex}
          itemCount={bottomRoutes.length}
          totalWidth={screenWidth}
        />
        {bottomRoutes.map(routeName => (
          <BottomNavButton
            key={routeName}
            title={routeName}
            navigate={setCurrentRouteName}
          />
        ))}
      </View>
    );
  }
}
