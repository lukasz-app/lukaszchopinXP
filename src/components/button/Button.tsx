import React, { StatelessComponent } from 'react';
import { View, Text, GestureView } from 'reactxp';
import { observer } from 'mobx-react';
import styles from './styles';

interface Props {
    label: string;
    onPress: () => void;
    active?: boolean;
}

const Button: StatelessComponent<Props> = ({ label, onPress, active = true }) => (
  <GestureView onTap={onPress} style={[styles.container, active && styles.containerActive]}>
    <View style={[styles.container, active && styles.containerActive]}>
      <Text style={[styles.label, active && styles.labelActive]}>{label}</Text>
    </View>
  </GestureView>
);

export default observer(Button);
