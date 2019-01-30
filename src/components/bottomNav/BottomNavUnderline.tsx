import React from 'react';
import { Component, Styles, Animated } from 'reactxp';
import { observer } from 'mobx-react';

import styles from './styles';

interface Props {
    index: number;
    totalWidth: number;
    itemCount: number;
}

interface State {
    animValue: Animated.Value;
}

@observer
export default class Underline extends Component<Props, State> {
    state: State = {
      animValue: Animated.createValue(0.0),
    };

    componentDidMount() {
      const { totalWidth, itemCount } = this.props;

      this.startAnimFor(0, 0, totalWidth / (itemCount - 1));
    }

    componentDidUpdate(prevProps: Props) {
      const { index, totalWidth, itemCount } = this.props;
      const { index: indexPrev } = prevProps;
      if (index !== indexPrev) {
        this.startAnimFor(indexPrev, index, totalWidth / itemCount);
      }
    }

    startAnimFor = (from: number, to: number, lineWidth: number) => {
      const animatedValue = Animated.createValue(from * lineWidth + 10);
      this.setState({ animValue: animatedValue }, () => {
        Animated.timing(this.state.animValue, {
          toValue: to * lineWidth + 10,
          duration: 300,
        }).start(() => {
        });
      });
    };

    render() {
      const { totalWidth, itemCount } = this.props;
      const { animValue } = this.state;
      const lineWidth = totalWidth / itemCount - 20;
      const animStyle = Styles.createAnimatedViewStyle({ left: animValue });

      return (
        <Animated.View
          style={[
            styles.underlineContainer,
            Styles.createViewStyle(
              {
                width: lineWidth,
              },
              false,
            ),
            animStyle,
          ]}
        />
      );
    }
}
