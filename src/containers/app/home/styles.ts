import { Styles } from 'reactxp';
import { Metrics } from '../../../global/themes';

export default {
  container: Styles.createViewStyle({
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Metrics.paddingTop,
  }),
  contentContiner: Styles.createViewStyle({
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Metrics.paddingTop,
  }),
  titleText: Styles.createTextStyle({
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
  }),
};
