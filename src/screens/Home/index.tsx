import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, Pressable, Animated } from 'react-native';
import styles from './styles';
const MentionExample = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [animation] = useState(new Animated.Value(1));
  const [rotateValue] = useState(new Animated.Value(0));
  const [fadeValue] = useState(new Animated.Value(1));

  const onButtonPress = () => {
    setIsPressed(!isPressed);
  //   Animated.sequence([
  //     Animated.timing(animation, {
  //       toValue: 0.8,
  //       duration: 100,
  //       useNativeDriver: true,
  //     }),
  //     Animated.spring(animation, {
  //       toValue: 1,
  //       friction: 3,
  //       useNativeDriver: true,
  //     }),
  //   ]).start();

  Animated.timing(animation, {
    toValue: 0.8,
    duration: 100,
    useNativeDriver: true,
  }).start(() => {
    Animated.spring(animation, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start()
  })
}

const onRotatePress = () => {
  Animated.sequence([
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }),
    Animated.timing(rotateValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    })
  ]).start()
}

const rotateInterpolate = rotateValue.interpolate({
  inputRange: [0,1],
  outputRange: ['0deg', '360deg']
})

const onFadePress = () => {
  Animated.sequence([
    Animated.timing(fadeValue, {
      toValue: 0.5,
      duration: 250,
      useNativeDriver: true
    }),
    Animated.timing(fadeValue, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true
    })
  ]).start()
}

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.button, {transform: [{scale: animation}]}]}>
        <Pressable  onPress={onButtonPress}>
          <Text style={{color: 'white'}}>CLICK</Text>  
        </Pressable>
      </Animated.View>

      <Animated.View style={[styles.button, {transform: [{rotate: rotateInterpolate}]}]}>
        <Pressable  onPress={onRotatePress}>
          <Text style={{color: 'white'}}>PRESS TO ROTATE</Text>  
        </Pressable>
      </Animated.View>

      <Animated.View style={[styles.button, {opacity: fadeValue} ]}>
        <Pressable  onPress={onFadePress}>
          <Text style={{color: 'white'}}>FADE </Text>  
        </Pressable>
      </Animated.View>

    </SafeAreaView>
  );
};

export default MentionExample;




