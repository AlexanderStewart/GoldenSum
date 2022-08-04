import { View, Text, Animated, Pressable, ScrollView, Image, SafeAreaView } from 'react-native';
import React, { useContext, useEffect, useState, useRef } from 'react';
import { screenEnter, screenExitBottom } from '../../Animations';
import tw from 'tailwind-react-native-classnames';
import { UIContext } from './../../context/UIContext';
import {
  XIcon,
  LightningBoltIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/outline';

export default function HowToPlay() {

  // context
  const contextUI = useContext(UIContext);
  const {
    howToPlay,
    setHowToPlay,
    height,
    width,
  } = contextUI;

  // State
  const [open, setOpen] = useState(false);

  //   Refs
  const screenY = useRef(new Animated.Value(height)).current;

  //   Functions
  const closeHandler = (e) => {
    screenExitBottom(screenY);
    setTimeout(() => {
      setHowToPlay({ open: false });
    }, 150);
  };
  //   Use Effect
  useEffect(() => {
    setOpen(howToPlay?.open);
  }, [howToPlay?.open]);

  useEffect(() => {
    if (open) {
      screenEnter(screenY);
    } else {
      screenExitBottom(screenY);
    }
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <Animated.View
      style={[
        {
          flex: 1,
        },
        tw`absolute top-0 left-0 h-full w-full z-50 flex bg-black bg-opacity-80 `,
      ]}>
      <Animated.View
        style={[{ transform: [{ translateY: screenY }] }, tw`flex flex-1`]}>
        <Pressable onPress={closeHandler} style={tw`flex flex-1`}></Pressable>

        <View style={[tw`absolute bottom-0 left-0 w-full bg-white rounded-t-3xl px-4 flex justify-center items-center`, { height: height - 128 }]}>
          <SafeAreaView>
            <View style={tw`m-8`}>
              <Text style={tw`text-gray-800 text-lg	`}><Text style={tw`font-bold`}>Step 1</Text>: Select any two yellow circles that are beside each other.{"\n"}</Text>
              <Text style={tw`text-gray-800 text-lg	`}><Text style={tw`font-bold`}>Step 2</Text>: Select one of the indigo circles that appears.{"\n"}</Text>
              <Text style={tw`text-gray-800 text-lg	`}><Text style={tw`font-bold`}>Step 3</Text>: The sum of the two selected circles becomes the value of the new circle.{"\n"}</Text>
              <Text style={tw`text-gray-800 text-lg	`}><Text style={tw`font-bold`}>Step 4</Text>: Fill in the gray numbered circle by matching its value with the value of a new circle.{"\n"}</Text>
              <Text style={tw`text-gray-800 text-lg	`}><Text style={tw`font-bold`}>Step 5</Text>: Be kind to yourself and remember that each day can be a new beginning.</Text>
            </View>
          </SafeAreaView>
        </View>
      </Animated.View>
    </Animated.View>
  );
}