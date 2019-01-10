import { Styles } from 'reactxp';

export default {
  container: Styles.createViewStyle({
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: 'yellow',
    flexDirection: 'column',
  }),
  list: Styles.createViewStyle({
    flexDirection: 'column',
    backgroundColor: 'pink',
  }),
  titleText: Styles.createTextStyle({
    color: 'black',
    fontSize: 18,
  }),
};
