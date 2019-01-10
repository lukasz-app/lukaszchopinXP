import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

const metrics = {
  paddingTop: getStatusBarHeight(),
  paddingBottom: getBottomSpace(),
};

export default metrics;
