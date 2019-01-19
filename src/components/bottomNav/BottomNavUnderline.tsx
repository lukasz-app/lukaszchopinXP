import React from 'react';
import {
  Component, View, Styles, Animated,
} from 'reactxp';
import { observer } from 'mobx-react';
import {
  StyleRuleSet,
  StyleRuleSetOrArray,
  AnimatedViewStyle,
  AnimatedValue,
} from 'reactxp/dist/common/Types';
import styles from './styles';

interface Props {
    index: number;
    totalWidth: number;
    itemCount: number;
}

interface State {
    index: number;
    totalWidth: number;
    itemCount: number;
    animValue: AnimatedValue;
}

@observer
export default class Underline extends Component<Props, State> {
    state = {
      animValue: Animated.createValue(0),
    };

    componentDidUpdate(prevProps: Props) {
      const { index } = this.props;
      const {
        // totalWidth: totalWidthPrev,
        // itemCount: itemCountPrev,
        index: indexPrev,
      } = prevProps;
      console.log('CDU');
      console.log('CDU old index DIFFER prev index', index !== indexPrev);
    }

    render() {
      const { totalWidth, itemCount, index } = this.props;
      const lineWidth = totalWidth / itemCount;
      const left = index * lineWidth + 10;
      console.log(left);
      return <View style={styles.underlineContainer} />;
    }
}
