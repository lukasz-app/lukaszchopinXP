import React from 'react';
import { Component, View } from 'reactxp';
import styles from './styles';

// interface Props {}

export default class Home extends Component<{}, {}> {
  render() {
    const {} = this.props;

    return (
      <View style={styles.container}>
        <View>
          {/* <ScrollView
                        style={styles.contentContainer}
                        contentContainerStyle={styles.contentContainerNested}
                    >
                        {items}
                    </ScrollView> */}
        </View>
        <View>
          {/* <Button
                        label="+"
                        style={styles.button}
                        labelStyle={styles.buttonLabel}
                        onPress={add}
                        active
                    />
                    <Button
                        label="-"
                        style={styles.button}
                        labelStyle={styles.buttonLabel}
                        onPress={subtract}
                        active
                    /> */}
          <View />
        </View>
      </View>
    );
  }
}
