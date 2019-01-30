import React from 'react';
import { Component, GestureView, Text } from 'reactxp';
import styles from './styles';
import { BottomRoute } from '../../stores/NavigationStore';

interface Props {
    title: string;
    navigate: (route: BottomRoute | string) => void;
}

export default class NavButton extends Component<Props, {}> {
    onButtonTap = () => {
      const { title, navigate } = this.props;
      navigate(title.toUpperCase());
    };

    render() {
      const { title } = this.props;
      return (
        <GestureView style={styles.buttonContainer} onTap={this.onButtonTap}>
          <Text style={styles.titleText}>{title}</Text>
        </GestureView>
      );
    }
}
