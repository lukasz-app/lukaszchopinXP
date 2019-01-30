import { Styles } from 'reactxp';
import { Metrics, AppStyles } from '../../../global/themes';

export default {
  container: AppStyles.screenContainer,
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
