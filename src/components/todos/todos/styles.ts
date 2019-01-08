import { Styles } from 'reactxp';

export default {
  container: Styles.createViewStyle({
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 2,
    borderColor: 'grey',
    margin: 20,
  }),
  buttonsContainer: Styles.createViewStyle({
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  }),
  titleText: Styles.createTextStyle({
    color: 'black',
    fontSize: 18,
  }),
  unreadText: Styles.createTextStyle({
    marginTop: 20,
    color: 'black',
    fontSize: 16,
  }),
};
