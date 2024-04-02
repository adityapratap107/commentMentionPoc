import {useEffect, useRef, useState} from 'react';
import {StatusBar} from 'react-native';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MainScreen from '../MainScreen';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const halfScreenWidth = screenWidth / 2;
// const SplashAnimation = () => {
const SplashAnimation = () => {
  const [isFinished, setIsFinished] = useState(false);
  const leftHalfAnimation = useRef(new Animated.Value(0)).current;
  const rightHalfAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateView = () => {
      Animated.parallel([
        Animated.timing(leftHalfAnimation, {
          toValue: -halfScreenWidth,
          duration: 1000,
          delay: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(rightHalfAnimation, {
          toValue: halfScreenWidth,
          duration: 1000,
          delay: 1000,

          useNativeDriver: false,
        }),
      ]).start(({finished}) => {
        console.log('finished', finished);
        setIsFinished(finished);
        // leftHalfAnimation.setValue(-halfScreenWidth);
        // rightHalfAnimation.setValue(halfScreenWidth);
        // animateView();
        // navigation.replace('MainScreen');
      });
    };

    animateView();
  }, []);

  return (
    <View style={[styles.container, {zIndex: isFinished ? 0 : 1}]}>
      <StatusBar backgroundColor={'#410061'} barStyle={'light-content'} />

      <Animated.View
        style={[
          styles.halfContainer,
          styles.leftHalf,
          {transform: [{translateX: leftHalfAnimation}]},
        ]}>
        {/* Content for the left half */}

        <Image
          source={require('../../assets/images/icon1.png')}
          style={styles.imageLogo}
          resizeMode={'cover'}
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.halfContainer,
          styles.rightHalf,
          {transform: [{translateX: rightHalfAnimation}]},
        ]}>
        {/* Content for the left half */}
        <Image
          source={require('../../assets/images/icon2.png')}
          style={[styles.imageLogo2]}
          resizeMode={'cover'}
        />
      </Animated.View>
    </View>
  );
};

export default SplashAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: '#410061',
    position: 'absolute',
    height: screenHeight,
    width: '100%',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  leftHalf: {
    backgroundColor: '#410061',
  },
  rightHalf: {
    backgroundColor: '#410061',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  imageLogo: {
    height: 226,
    width: 134,
    // width: halfScreenWidth,
  },
  imageLogo2: {
    height: 226,
    width: 134,
    // width: halfScreenWidth,
  },
});
