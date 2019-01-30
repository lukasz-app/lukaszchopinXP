import React from 'react';
import {
  Component, View, ActivityIndicator, Animated, Styles,
} from 'reactxp';
import { observer, inject } from 'mobx-react';
import styles from './styles';
import { Colors } from '../../../global/themes';
import { Button } from '../../../components';
import SplashStore from '../../../stores/SplashStore';

interface Props {
    splashStore?: SplashStore;
    appReady: boolean;
}

@inject('splashStore')
@observer
export default class Splash extends Component<Props, {}> {
  componentDidMount() {
    this.props.splashStore.startHeaderTitleChange();
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.appReady && this.props.appReady !== prevProps.appReady) {
      this.props.splashStore.showSkipButton();
    }
  }

  render() {
    const {
      fadeOutAnim,
      splashVisible,
      startFadeOut,
      skipButtonVisible,
    } = this.props.splashStore;
    if (!splashVisible) {
      return null;
    }
    const animatedStyle = Styles.createAnimatedViewStyle({ opacity: fadeOutAnim });
    return (
      <Animated.View style={[styles.container, animatedStyle]}>
        <ActivityIndicator color={Colors.appColors.waterloo} size="large" />
        {skipButtonVisible && (
        <View
          style={Styles.createViewStyle({
            position: 'absolute',
            bottom: 0,
            right: 0,
            padding: 20,
          })}
        >
          <Button active label="skip" onPress={startFadeOut} />
        </View>
        )}
      </Animated.View>
    );
  }
}
