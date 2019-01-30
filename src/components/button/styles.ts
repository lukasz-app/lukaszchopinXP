import { Styles } from 'reactxp';
import { Colors } from '../../global/themes';

const styles = {
  container: Styles.createViewStyle({
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.appColors.grey,
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    margin: 10,
    borderRadius: 4,
  }),
  containerActive: Styles.createViewStyle({
    backgroundColor: Colors.appColors.waterloo,
  }),
  label: Styles.createTextStyle({
    color: Colors.appColors.steelGrey,
    textAlign: 'center',
  }),
  labelActive: Styles.createTextStyle({
    color: Colors.appColors.white,
  }),
};

export default styles;
