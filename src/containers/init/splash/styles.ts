import { Styles } from 'reactxp';
import { AppStyles, Colors } from '../../../global/themes';

export default {
  container: [
    AppStyles.screenContainer,
    Styles.createViewStyle({
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.appColors.steelGrey,
    }),
  ],
  titleText: Styles.createTextStyle({
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  }),
};
