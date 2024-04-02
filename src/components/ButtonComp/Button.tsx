import { Pressable, Text } from 'react-native';
import React from 'react';
import styles from './styles';

interface ButtonProps {
  title: string;
  onButtonPress: () => void
};

const ButtonComp = ({title, onButtonPress}: ButtonProps) => {
  return (
    <Pressable style={styles.buttonContainer} onPress={onButtonPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}

export default ButtonComp;
