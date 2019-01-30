import { ViewStyle, StyleRuleSet } from 'reactxp/dist/common/Types';
import { Styles } from 'reactxp';

const screenContainer: StyleRuleSet<ViewStyle> = Styles.createViewStyle({
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  position: 'absolute',
});

const styles = {
  screenContainer,
};

export default styles;
