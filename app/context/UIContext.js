import React, {
  useState,
  createContext,
} from 'react';
import { useWindowDimensions } from 'react-native';

export const UIContext = createContext();

function UIProvider(props) {
  // Dimensions
  const { width, height } = useWindowDimensions();

  // State
  const [play, setPlay] = useState({
    open: false,
  });

  const [howToPlay, setHowToPlay] = useState({
    open: false,
  });

  const value = {
    // Dimensions
    width,
    height,

    // State
    play,
    setPlay,
    howToPlay,
    setHowToPlay
  };

  return (
    <UIContext.Provider value={value}>{props.children}</UIContext.Provider>
  );
}
export default UIProvider;