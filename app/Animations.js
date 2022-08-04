import { Animated, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const fadeIn = (ref) => {
  Animated.timing(ref, {
    toValue: 1,
    duration: 150,
    useNativeDriver: true,
  }).start();
};

export const fadeOut = (ref) => {
  Animated.timing(ref, {
    toValue: 0,
    duration: 150,
    useNativeDriver: true,
  }).start();
};

export const screenEnter = (ref) => {
  Animated.timing(ref, {
    toValue: 0,
    duration: 150,
    useNativeDriver: true,
  }).start();
};

export const screenExitRight = (ref) => {
  Animated.timing(ref, {
    toValue: windowWidth,
    duration: 150,
    useNativeDriver: true,
  }).start();
};

export const screenExitLeft = (ref) => {
  Animated.timing(ref, {
    toValue: -windowWidth,
    duration: 150,
    useNativeDriver: true,
  }).start();
};

export const screenExitBottom = (ref) => {
  Animated.timing(ref, {
    toValue: windowHeight,
    duration: 150,
    useNativeDriver: true,
  }).start();
};