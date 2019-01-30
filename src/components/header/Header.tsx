import React from 'react';
import { Component, View, Text } from 'reactxp';
import { observer } from 'mobx-react';
import styles from './styles';

interface Props {
    title: string;
    titleSections: string[];
}

@observer
export default class Header extends Component<Props, {}> {
  render() {
    const [main, second, third, rest] = this.props.titleSections;
    return (
      <View style={styles.container}>
        {!!rest && rest.length && <Text style={styles.thirdText}>../</Text>}
        {!!third && <Text style={styles.thirdText}>{third}</Text>}
        {!!second && (
        <Text style={styles.secondText}>
          {!!third && '/'}
          {second}
        </Text>
        )}
        {!!main && (
        <Text style={styles.mainText}>
          {!!second && '/'}
          {main}
        </Text>
        )}
      </View>
    );
  }
}
