import { Styles } from 'reactxp';
import { Colors } from '../../global/themes';
import platformStyles from './platformStyles';

const {
  appColors: { waterloo },
  colorWithOpacity,
} = Colors;

export default {
  container: [
    Styles.createViewStyle({
      height: 60,
      // alignSelf: 'stretch',
      backgroundColor: colorWithOpacity(waterloo, 0.9),
      flexDirection: 'row',
    }),
    platformStyles.container,
  ],
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
