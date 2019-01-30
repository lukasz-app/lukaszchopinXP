import React from 'react';
import { Component, View, Text } from 'reactxp';
import { inject, observer } from 'mobx-react';
import styles from './styles';
import { BottomNav } from '../../../components';
import NavigationStore from '../../../stores/NavigationStore';

interface Props {
    navigationStore?: NavigationStore;
}

@inject('navigationStore')
@observer
export default class Home extends Component<Props, {}> {
  render() {
    const { navigationStore } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.contentContiner}>
          <Text>
            {`  this is content for
            ${navigationStore.currentRouteName}`}
          </Text>
        </View>
        <BottomNav />
      </View>
    );
  }
}
