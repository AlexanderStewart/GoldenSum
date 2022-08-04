export default function BoardData(props) {

  // props
  const stringLevel = props.level;
  const level = parseInt(stringLevel);

  // variables
  let myTileData = [];
  const activeColor = '#fcd34d';
  const selectedColor = '#86efac';
  const nonActiveColor = '#e4e4e7';

  // squeaky clean fresh board
  for (let i = 1; i < 26; i++) {
    myTileData.push({
      index: i, number: '', color: nonActiveColor, textColor: '#6b7280', active: false, selected: false, highlighted: false, goal: false
    });
  }
  myTileData[12].color = activeColor;
  myTileData[17].color = activeColor;

  myTileData[12].number = '1';
  myTileData[17].number = '2';

  myTileData[12].active = true;
  myTileData[17].active = true;

  // levels
  if (level === 1) {
    // done
    myTileData[21].number = '5';
    myTileData[21].goal = true;
    myTileData[21].textColor = '#94a3b8';
  }
  if (level === 2) {
    // done
    myTileData[6].number = '6';
    myTileData[6].goal = true;
    myTileData[6].textColor = '#94a3b8';
  }
  if (level === 3) {
    // done
    myTileData[2].number = '8';
    myTileData[2].goal = true;
    myTileData[2].textColor = '#94a3b8';
  }
  if (level === 4) {
    // done
    myTileData[15].number = '5';
    myTileData[15].goal = true;
    myTileData[15].textColor = '#94a3b8';
  }
  if (level === 5) {
    // done
    myTileData[19].number = '6';
    myTileData[19].goal = true;
    myTileData[19].textColor = '#94a3b8';
  }
  if (level === 6) {
    // done
    myTileData[7].number = '7';
    myTileData[7].goal = true;
    myTileData[7].textColor = '#94a3b8';
  }
  if (level === 7) {
    // done
    myTileData[24].number = '8';
    myTileData[24].goal = true;
    myTileData[24].textColor = '#94a3b8';
  }
  if (level === 8) {
    // done
    myTileData[5].number = '7';
    myTileData[5].goal = true;
    myTileData[5].textColor = '#94a3b8';
  }
  if (level === 9) {
    // done
    myTileData[11].number = '8';
    myTileData[11].goal = true;
    myTileData[11].textColor = '#94a3b8';
  }
  if (level === 10) {
    // done
    myTileData[18].number = '7';
    myTileData[18].goal = true;
    myTileData[18].textColor = '#94a3b8';
  }
  if (level === 11) {
    // done 
    myTileData[8].number = '9';
    myTileData[8].goal = true;
    myTileData[8].textColor = '#94a3b8';
  }
  if (level === 12) {
    // done
    myTileData[22].number = '8';
    myTileData[22].goal = true;
    myTileData[22].textColor = '#94a3b8';
  }
  if (level === 13) {
    // done 
    myTileData[21].number = '9';
    myTileData[21].goal = true;
    myTileData[21].textColor = '#94a3b8';
  }
  if (level === 14) {
    // done
    myTileData[19].number = '9';
    myTileData[19].goal = true;
    myTileData[19].textColor = '#94a3b8';
  }



  if (level === 15) {
    // done
    myTileData[13].number = '11';
    myTileData[13].goal = true;
    myTileData[13].textColor = '#94a3b8';
  }
  if (level === 16) {
    // done
    myTileData[5].number = '10';
    myTileData[5].goal = true;
    myTileData[5].textColor = '#94a3b8';
  }
  if (level === 17) {
    // done
    myTileData[18].number = '12';
    myTileData[18].goal = true;
    myTileData[18].textColor = '#94a3b8';
  }
  if (level === 18) {
    // done
    myTileData[8].number = '10';
    myTileData[8].goal = true;
    myTileData[8].textColor = '#94a3b8';
  }
  if (level === 19) {
    // done
    myTileData[7].number = '13';
    myTileData[7].goal = true;
    myTileData[7].textColor = '#94a3b8';
  }
  if (level === 20) {
    // done
    myTileData[9].number = '11';
    myTileData[9].goal = true;
    myTileData[9].textColor = '#94a3b8';
  }
  if (level === 21) {
    // done
    myTileData[5].number = '12';
    myTileData[5].goal = true;
    myTileData[5].textColor = '#94a3b8';
  }
  if (level === 22) {
    // done
    myTileData[19].number = '13';
    myTileData[19].goal = true;
    myTileData[19].textColor = '#94a3b8';
  }
  if (level === 23) {
    // done
    myTileData[20].number = '11';
    myTileData[20].goal = true;
    myTileData[20].textColor = '#94a3b8';
  }
  if (level === 24) {
    // done 
    myTileData[4].number = '12';
    myTileData[4].goal = true;
    myTileData[4].textColor = '#94a3b8';
  }
  if (level === 25) {
    // done
    myTileData[5].number = '13';
    myTileData[5].goal = true;
    myTileData[5].textColor = '#94a3b8';
  }
  if (level === 26) {
    // done
    myTileData[15].number = '14';
    myTileData[15].goal = true;
    myTileData[15].textColor = '#94a3b8';
  }
  if (level === 27) {
    // done
    myTileData[7].number = '15';
    myTileData[7].goal = true;
    myTileData[7].textColor = '#94a3b8';
  }
  if (level === 28) {
    // done
    myTileData[19].number = '15';
    myTileData[19].goal = true;
    myTileData[19].textColor = '#94a3b8';
  }
  if (level === 29) {
    // done
    myTileData[13].number = '14';
    myTileData[13].goal = true;
    myTileData[13].textColor = '#94a3b8';
  }
  if (level === 30) {
    // done
    myTileData[3].number = '16';
    myTileData[3].goal = true;
    myTileData[3].textColor = '#94a3b8';
  }

  return myTileData;
}