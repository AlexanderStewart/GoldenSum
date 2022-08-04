import { SafeAreaView, Text, View, Pressable } from 'react-native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import { UIContext } from './../context/UIContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

// icons
import {
  RefreshIcon,
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from 'react-native-heroicons/outline';

// Components
import Tile from './../components/Tile';

// Board stuff
import BoardData from '../boardStuff/BoardData';
import WinBoard from '../boardStuff/WinBoard';

const Play = () => {

  // Variables
  const contextUI = useContext(UIContext);
  const {
    height,
    setHowToPlay
  } = contextUI;

  const activeColor = '#fcd34d';
  const selectedColor = '#86efac';
  const highlightColor = '#c7d2fe';
  const nonActiveColor = '#e4e4e7';

  // State
  const [tileData, setTileData] = useState([]);
  const [selectedNum, setSelectedNum] = useState(0);
  const [moves, setMoves] = useState([]);
  const [forwardMoves, setForwardMoves] = useState([]);
  const [won, setWon] = useState(false);
  const [level, setLevel] = useState(null);
  const [highestLevel, setHighestLevel] = useState(null);
  const [reset, setReset] = useState(false);

  // Functions
  const start = async () => {
    // TODO: comment out when needed
    // await AsyncStorage.clear();

    if (await AsyncStorage.getItem('level') === null) await AsyncStorage.setItem('level', '1');
    const level = await AsyncStorage.getItem('level');

    setLevel(level);

    if (await AsyncStorage.getItem('highestLevel') === null) await AsyncStorage.setItem('highestLevel', '1');
    const highestLevel = await AsyncStorage.getItem('highestLevel');

    setHighestLevel(highestLevel);


    setMoves([]);
    setWon(false);
    setSelectedNum(0);

    const myTileData = setBoard(level);
    setTileData(myTileData);

    setReset(true);
  };

  const setBoard = (level) => {

    const myTileData = BoardData({ level: parseInt(level) });

    return myTileData;
  };

  const goForward = () => {
    if (forwardMoves.length === 0) return;
    const forwardMove = forwardMoves[forwardMoves.length - 1];
    let myTileData = [...tileData];

    let myForwardMoves = [...forwardMoves];
    let poppedValue = myForwardMoves.pop();
    setForwardMoves(myForwardMoves);

    // add tile to moves
    let myMoves = [...moves];
    myMoves.push(poppedValue.index);
    setMoves(myMoves);

    myTileData[forwardMove.index].number = forwardMove.num;
    myTileData[forwardMove.index].color = activeColor;
    myTileData[forwardMove.index].active = true;
    myTileData[forwardMove.index].selected = false;

    for (let i = 0; i < myTileData.length; i++) {
      if (myTileData[i].highlighted) {
        myTileData[i].highlighted = false;
        myTileData[i].color = nonActiveColor;
      }
      if (myTileData[i].selected) {
        myTileData[i].selected = false;
        myTileData[i].color = activeColor;
      }
    }
    setSelectedNum(0);

    setTileData(myTileData);
  };

  const goBack = () => {
    if (moves.length === 0) return;
    const index = moves[moves.length - 1];
    let myTileData = [...tileData];

    let myMoves = [...moves];
    let poppedValue = myMoves.pop();
    setMoves(myMoves);

    let myForwardMoves = [...forwardMoves];
    myForwardMoves.push({ index: poppedValue, num: myTileData[index].number });
    setForwardMoves(myForwardMoves);

    myTileData[index].number = '';
    myTileData[index].color = nonActiveColor;
    myTileData[index].active = false;
    myTileData[index].selected = false;

    for (let i = 0; i < myTileData.length; i++) {
      if (myTileData[i].highlighted && !myTileData[i].active) {
        myTileData[i].highlighted = false;
        myTileData[i].color = nonActiveColor;
      }
      if (myTileData[i].selected) {
        myTileData[i].selected = false;
        myTileData[i].color = activeColor;
      }
    }

    setSelectedNum(0);

    setTileData(myTileData);
  };

  const goForwardLevel = async () => {
    const highestLevel = await AsyncStorage.getItem('highestLevel');
    const level = await AsyncStorage.getItem('level');
    // if (parseInt(level) < parseInt(highestLevel)) {
    if (parseInt(level) < 30 && level < highestLevel) {
      await AsyncStorage.setItem('level', (parseInt(level) + 1).toString());
      setLevel(parseInt(level) + 1);
      start();
    }
  };

  const goBackLevel = async () => {
    const level = parseInt(await AsyncStorage.getItem('level'));

    if (level > 1) {
      const curLevel = level - 1;
      await AsyncStorage.setItem('level', curLevel.toString());
      setLevel(level - 1);
      start();
    }
  };

  const nextTo = (indexA, indexB) => {

    if (!indexA || !indexB) return false;

    if (indexA >= 2 && indexA <= 4) {
      if (indexA + 1 === indexB || indexA - 1 === indexB || indexA + 5 === indexB) return true;
      else return false;
    }
    else if (indexA === 6 || indexA === 11 || indexA === 16) {
      if (indexA + 1 === indexB || indexA - 5 === indexB || indexA + 5 === indexB) return true;
      else return false;
    }
    else if (indexA >= 22 && indexA <= 24) {
      if (indexA + 1 === indexB || indexA - 1 === indexB || indexA - 5 === indexB) return true;
      else return false;
    }
    else if (indexA === 10 || indexA === 15 || indexA === 20) {
      if (indexA - 1 === indexB || indexA - 5 === indexB || indexA + 5 === indexB) return true;
      else return false;
    }
    else if (indexA === 1) {
      if (indexB === 2 || indexB === 6) return true;
      else return false;
    }
    else if (indexA === 5) {
      if (indexB === 4 || indexB === 10) return true;
      else return false;
    }
    else if (indexA === 21) {
      if (indexB === 22 || indexB === 16) return true;
      else return false;
    }
    else if (indexA === 25) {
      if (indexB === 24 || indexB === 20) return true;
      else return false;
    }
    else {
      if (indexA + 1 === indexB || indexA - 1 === indexB || indexA - 5 === indexB || indexA + 5 === indexB) return true;
      else return false;
    }
  };

  const highlightTiles = (myTileData) => {

    const indexes = [];

    for (let i = 0; i < myTileData.length; i++) {
      if (myTileData[i].selected) {
        indexes.push(i + 1);
      }
    }

    for (let n = 0; n < 2; n++) {
      if (indexes[n] + 1 <= 24) {
        if (nextTo(indexes[n], indexes[n] + 1) && !myTileData[indexes[n] + 1 - 1].active) {
          myTileData[indexes[n] + 1 - 1].highlighted = true;
          myTileData[indexes[n] + 1 - 1].color = highlightColor;
        }
      }
      if (indexes[n] - 1 <= 24) {
        if (nextTo(indexes[n], indexes[n] - 1) && !myTileData[indexes[n] - 1 - 1].active) {
          myTileData[indexes[n] - 1 - 1].highlighted = true;
          myTileData[indexes[n] - 1 - 1].color = highlightColor;
        }
      }
      if (indexes[n] + 5 <= 24) {
        if (nextTo(indexes[n], indexes[n] + 5) && !myTileData[indexes[n] + 5 - 1].active) {
          myTileData[indexes[n] + 5 - 1].highlighted = true;
          myTileData[indexes[n] + 5 - 1].color = highlightColor;
        }
      }
      if (indexes[n] - 5 <= 24) {
        if (nextTo(indexes[n], indexes[n] - 5) && !myTileData[indexes[n] - 5 - 1].active) {
          myTileData[indexes[n] - 5 - 1].highlighted = true;
          myTileData[indexes[n] - 5 - 1].color = highlightColor;
        }
      }
    }

    return myTileData;
  };

  const GenerateBoard = () => {

    const Tiles = tileData.map((val) =>
      <Tile index={val.index} num={val.number} color={val.color} textColor={val.textColor} tilePressed={tilePressed} reset={reset} key={val.index.toString()} />
    );
    return (
      <View style={[tw`flex flex-row flex-wrap mt-4`, { maxWidth: 310 }]}>{Tiles}</View>
    );
  };

  const tilePressed = async (myIndex) => {

    // Getting the pressed tile's data
    const pressedTileData = tileData[myIndex - 1];

    // Dealing with select count
    let mySelectedNum = selectedNum;
    if (pressedTileData.active) {
      mySelectedNum = selectedNum + 1;
      setSelectedNum(mySelectedNum);
    }

    // if the current tile is active and selected
    if (pressedTileData.active && pressedTileData.selected) {
      let myTileData = [...tileData];

      for (let i = 0; i < myTileData.length; i++) {
        myTileData[i].selected = false;
        if (myTileData[i].active) myTileData[i].color = activeColor;
        else if (!myTileData[i].active) {
          myTileData[i].color = nonActiveColor;
        }
      }
      setSelectedNum(0);

      setTileData(myTileData);
    }
    // if tile tapped is NOT active
    else if (!pressedTileData.active) {

      let myTileData = [...tileData];

      let indexes = [];
      for (let i = 0; i < myTileData.length; i++) {
        if (myTileData[i].selected) indexes.push(i);
      }

      if (nextTo(indexes[0] + 1, indexes[1] + 1)) {
        if (nextTo(indexes[0] + 1, myIndex) || nextTo(indexes[1] + 1, myIndex)) {

          // add values
          const sum = (parseInt(myTileData[indexes[0]].number) + parseInt(myTileData[indexes[1]].number)).toString();

          if (myTileData[myIndex - 1].goal) {
            if (sum === pressedTileData.number) {
              // won level
              const level = await AsyncStorage.getItem('level');
              const nextLevel = (parseInt(level) + 1).toString();
              await AsyncStorage.setItem('level', nextLevel);
              await AsyncStorage.setItem('highestLevel', nextLevel);
              setWon(true);
              const myTileData = WinBoard();
              setTileData(myTileData);

              return;
            }
          }
          else {
            myTileData[myIndex - 1].number = sum;

            // create new tile
            myTileData[myIndex - 1].color = activeColor;
            myTileData[myIndex - 1].active = true;

            // add tile to moves
            let myMoves = [...moves];
            myMoves.push(myIndex - 1);
            setMoves(myMoves);
          }

          for (let i = 0; i < myTileData.length; i++) {
            myTileData[i].selected = false;
            if (myTileData[i].active) myTileData[i].color = activeColor;
            else if (!myTileData[i].active) {
              myTileData[i].color = nonActiveColor;
            }
          }

          setSelectedNum(0);
        }
      }

      setTileData(myTileData);
    }
    else if (mySelectedNum <= 3) {

      let myTileData = [...tileData];

      if (pressedTileData.active) {
        myTileData[myIndex - 1].color = selectedColor;
        myTileData[myIndex - 1].selected = true;

        if (mySelectedNum === 2) {
          myTileData = highlightTiles(myTileData);
        }

        if (mySelectedNum === 3) {

          // deselect everything but the one just selected,
          // can't have three tiles selected
          for (let i = 0; i < myTileData.length; i++) {
            if (i === (myIndex - 1)) continue;
            if (myTileData[i].selected) {
              myTileData[i].color = activeColor;
              myTileData[i].selected = false;
            }
            else if (!myTileData[i].active) {
              myTileData[i].color = nonActiveColor;
            }
          }
          setSelectedNum(1);
        }
      }
      setTileData(myTileData);
    }
  };

  // UseEffects
  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setReset(false);
    }, 200);
  }, [reset]);

  return (
    <View style={[{ userSelect: 'none' }, tw`flex flex-1 w-full h-full`]}>
      <View style={tw`absolute flex flex-1 left-0 right-0 top-0 items-center z-40`}>
        <SafeAreaView>
          <Text style={[tw`mt-8 font-extrabold text-4xl text-center`, { color: '#fbbf24' }]}>Golden Sum</Text>
          <View style={tw`content-center items-center mt-2`} >
            <View style={tw`h-2 w-12 bg-green-300`} />
          </View>
          <View style={tw`flex justify-center items-center flex-row mt-1 z-50`}>
            <Pressable style={tw`px-6 z-50`} onPress={() => goBackLevel()}>
              <ArrowNarrowLeftIcon width={45} height={45} color={'#71717a'} />
            </Pressable>

            <View>
              <Text style={[tw`font-bold text-2xl text-center`, { color: '#71717a' }]}>LEVEL {level}</Text>
            </View>

            <Pressable style={tw`px-6`} onPress={() => goForwardLevel()}>
              <ArrowNarrowRightIcon width={45} height={45} color={'#71717a'} />
            </Pressable>
          </View>
        </SafeAreaView>
      </View>
      <View style={[tw`flex justify-center items-center z-0`, { height: height }]}>
        <GenerateBoard />
      </View>
      <View style={tw`absolute flex left-0 right-0 bottom-0 items-center`}>
        <SafeAreaView>
          <View style={tw`flex justify-center items-center flex-row z-40`}>

            <Pressable style={tw`px-6`} onPress={() => goBack()}>
              <ArrowCircleLeftIcon width={45} height={45} color={'#71717a'} />
            </Pressable>
            <Pressable style={tw`px-6`} onPress={() => start()}>
              <RefreshIcon width={45} height={45} color={'#71717a'} />
            </Pressable>
            <Pressable style={tw`px-6`} onPress={() => goForward()}>
              <ArrowCircleRightIcon width={45} height={45} color={'#71717a'} />
            </Pressable>

          </View>
          <View style={tw`mb-6`} />
          <View style={tw`flex justify-center items-center flex-row`}>
            <Pressable onPress={() => setHowToPlay({ open: true })}>
              <View style={[tw`mx-1 px-4 py-2 bg-white rounded-md border-2 justify-center items-center`, {
                borderColor: '#fbbf24'
              }]}>
                <Text style={[tw`text-base font-bold`, { color: '#71717a' }]}>How to Play</Text>
              </View>
            </Pressable>
            <Pressable onPress={async () => {
              if (won) {
                if (level === highestLevel) {
                  await AsyncStorage.setItem('highestLevel', (parseInt(highestLevel) + 1).toString());
                  setHighestLevel(parseInt(highestLevel) + 1);
                }
                await AsyncStorage.setItem('level', (parseInt(level) + 1).toString());
                setLevel(parseInt(level) + 1);

                start();
              }
            }}>
              <View style={[tw`mx-1 px-4 py-2 bg-white rounded-md border-2 w-32 justify-center items-center`,
              won ? ({
                borderColor: '#86efac'
              }) : ({
                borderColor: '#d4d4d8'
              })]}>
                <Text style={[tw`text-base font-bold`, won ? ({ color: '#71717a' }) : ({
                  color: '#d4d4d8'
                })]}>Next Level</Text>
              </View>
            </Pressable>
          </View>
          <View style={tw`mb-4`} />
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Play;;