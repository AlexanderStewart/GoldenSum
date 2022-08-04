import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useRef, useState, useEffect, useContext } from 'react';
import tw from 'tailwind-react-native-classnames';
import { useSpring, animated, config } from '@react-spring/native';
import { UIContext } from './../context/UIContext';

export default function Tile(props) {

  // Variables
  const contextUI = useContext(UIContext);
  const {
    height
  } = contextUI;

  // Props
  const num = props.num;
  let myNum = num;
  if (parseInt(myNum) > 999) {
    myNum = 'x';
  }
  const index = props.index;
  const color = props.color;
  const textColor = props.textColor;
  const reset = props.reset;

  // State
  const [pressed, setPressed] = useState(false);
  const [highlighted, setHighlighted] = useState(false);

  const adjustValue = height / 800;

  const styleAnim = useSpring({
    opacity: pressed ? 0.75 : 1 || highlighted ? 1 : 1, height: pressed || highlighted ? adjustValue * 55 : adjustValue * 80, marginTop: pressed || highlighted ? adjustValue * 16.5 : 4,
    config: pressed ? { mass: 1, tension: 170, friction: 10 } : { mass: 1, tension: 170, friction: 10 } || highlighted ? { mass: 1, tension: 170, friction: 26, duration: 100 } : { mass: 1, tension: 170, friction: 26, duration: 100 },
    onRest: () => {
      setHighlighted(false);
    }
  });

  useEffect(() => {
    // highlighted tiles
    if (color === '#c7d2fe') {
      setHighlighted(true);
    }
  }, [color]);

  useEffect(() => {
    if (reset) setHighlighted(true);
  }, [reset]);


  // Functions
  const handlePress = () => {
    props.tilePressed(index);
  };

  return (
    <View>
      <View>
        <Pressable
          onPress={() => handlePress()}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}>
          <animated.View style={[styleAnim, tw`rounded-full justify-center items-center`, { margin: 4, width: 54, backgroundColor: color }]}>
            <Text style={[tw`font-extrabold text-2xl`, { color: textColor }]}>{myNum}</Text>
          </animated.View>
        </Pressable>
      </View>
    </View>
  );
}