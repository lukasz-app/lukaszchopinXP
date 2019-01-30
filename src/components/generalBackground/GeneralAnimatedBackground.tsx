import React from 'react';
import { Component, View } from 'reactxp';
import { inject, observer } from 'mobx-react';
import styles from './styles';
import NavigationStore from '../../stores/NavigationStore';
import InterfaceStore from '../../stores/InterfaceStore';

interface Props {
    navigationStore?: NavigationStore;
    interfaceStore?: InterfaceStore;
}


@inject('navigationStore', 'interfaceStore')
@observer
export default class GeneralAnimatedBackground extends Component<Props, {}> {
  render() {
    const {
      navigationStore: {},
    } = this.props;
    return [
      <View key="bacground" style={styles.container} />,
      <View key="shape" style={styles.shape} />,
    ];
  }
}
