export default function BoardData() {

  // variables
  let myTileData = [];
  const nonActiveColor = '#e4e4e7';

  // squeaky clean fresh board
  for (let i = 1; i < 26; i++) {
    myTileData.push({
      index: i, number: '', color: nonActiveColor
    });
  }

  myTileData[6].color = '#fda4af';
  myTileData[7].color = '#f9a8d4';
  myTileData[8].color = '#f0abfc';

  myTileData[6].number = 'Y';
  myTileData[7].number = 'O';
  myTileData[8].number = 'U';

  myTileData[11].color = '#c4b5fd';
  myTileData[12].color = '#a5b4fc';
  myTileData[13].color = '#5eead4';

  myTileData[11].number = 'W';
  myTileData[12].number = 'I';
  myTileData[13].number = 'N';

  myTileData[17].color = '#fbbf24';
  myTileData[17].number = '!';

  return myTileData;
}