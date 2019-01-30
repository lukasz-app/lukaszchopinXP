import { Styles } from 'reactxp';
import { Metrics, Colors } from '../../global/themes';

const {
  appColors: { white },
} = Colors;

export default {
  container: Styles.createViewStyle({
    alignSelf: 'stretch',
    paddingTop: Metrics.paddingTop + 10,
    paddingBottom: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    // backgroundColor: colorWithOpacity(waterloo, 0.8),
  }),
  mainText: Styles.createTextStyle({
    color: white,
    fontSize: 20,
    fontWeight: '400',
  }),
  secondText: Styles.createTextStyle({
    color: white,
    fontSize: 14,
    fontWeight: '300',
  }),
  thirdText: Styles.createTextStyle({
    color: white,
    fontSize: 9,
    fontWeight: '200',
  }),
};
