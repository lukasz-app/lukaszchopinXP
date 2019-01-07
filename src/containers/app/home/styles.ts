import { Styles } from 'reactxp';

export default {
  container: Styles.createViewStyle({
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  }),
  titleText: Styles.createTextStyle({
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  }),
};
