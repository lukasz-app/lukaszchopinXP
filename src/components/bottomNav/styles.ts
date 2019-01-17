import { Styles } from 'reactxp';
import { Metrics, Colors } from '../../global/themes';

export default {
  container: Styles.createViewStyle({
    height: 60,
    alignSelf: 'stretch',
    backgroundColor: Colors.appColors.waterloo,
    flexDirection: 'row',
  }),
  buttonContainer: Styles.createViewStyle({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: 0,
  }),
  underlineContainer: Styles.createViewStyle({
    position: 'absolute',
    top: 30,
    bottom: 18,
    backgroundColor: Colors.appColors.steelGrey,
  }),
  titleText: Styles.createTextStyle({
    color: Colors.appColors.white,
    fontSize: 18,
    fontWeight: '400',
  }),
};
