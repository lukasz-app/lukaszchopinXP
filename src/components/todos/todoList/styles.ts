import { Styles } from 'reactxp';

export default {
  container: Styles.createViewStyle({
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: 'yellow',
  }),
  titleText: Styles.createTextStyle({
    color: 'black',
    fontSize: 18,
  }),
};
