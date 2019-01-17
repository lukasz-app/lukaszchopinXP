import React from 'react';
import { Component, View, Styles } from 'reactxp';
import { observer } from 'mobx-react';
import styles from './styles';

interface Props {
    index: number;
    totalWidth: number;
    itemCount: number;
}

@observer
export default class Underline extends Component<Props, {}> {
  render() {
    const { totalWidth, itemCount, index } = this.props;
    const lineWidth = totalWidth / itemCount;
    const left = index * lineWidth + 10;
    console.log(left);
    return (
      <View
        style={[
          styles.underlineContainer,
          Styles.createViewStyle({ left, width: lineWidth - 20 }, false),
        ]}
      />
    );
  }
}
