import { Styles } from 'reactxp';

const styles = {
  container: Styles.createViewStyle({
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    margin: 10,
    // borderWidth: 1,
    // borderColor: Colors.lightGrey,
  }),
  containerActive: Styles.createViewStyle({
    backgroundColor: 'green',
    // borderColor: Colors.green,
  }),
  label: Styles.createTextStyle({
    color: 'white',
    textAlign: 'center',
  }),
  labelActive: Styles.createTextStyle({
    color: 'red',
  }),
};

export default styles;
