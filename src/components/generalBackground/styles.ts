import { Styles } from 'reactxp';
import { Colors, Metrics } from '../../global/themes';

export default {
  container: Styles.createViewStyle({
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.appColors.steelGrey,
  }),
  shape: Styles.createViewStyle({
    position: 'absolute',
    top: Metrics.paddingTop + 10,
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 600,
    borderBottomLeftRadius: 600,
    backgroundColor: Colors.appColors.grey,
  }),
};
