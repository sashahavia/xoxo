import { Map } from 'immutable';

// ACTIONS
const MOVE = 'MOVE';

// ACTION CREATORS
export const move = (turn, position) => {
  return {
    type: MOVE,
    position,
    player: turn,
  };
};

const initialState = {
  board: Map(),
  turn: 'X',
  winner: null
};

// // Function winner
const streak = (board, firstCoord, secondCoord, thirdCoord) => {
  if (board.getIn(firstCoord) === board.getIn(secondCoord) &&
    board.getIn(secondCoord) === board.getIn(thirdCoord)
  ) {
    // every square is the same
    return board.getIn(firstCoord); // 'X', 'O', or undefined
  } else {
    // squares are different
    return undefined;
  }
};

const winner = board => {
  const winningStreaks = [
    [[0,0], [0,1], [0,2]],
    [[1,0], [1,1], [1,2]],
    [[2,0], [2,1], [2,2]],
    [[0,0], [1,0], [2,0]],
    [[0,1], [1,1], [2,1]],
    [[0,2], [1,2], [2,2]],
    [[0,0], [1,1], [2,2]],
    [[0,2], [1,1], [2,0]]
  ]

  for (let i = 0; i < 8; i++) {
   const coords = winningStreaks[i];
   if (streak(board, ...coords)) {
     return streak(board, ...coords) // return 'X' or 'O'
   }
  }
  const positions = [[0,0], [0,1], [0,2], [1,0], [1,1], [1,2], [2,0], [2,1], [2,2]];

  return positions.reduce((prev, coords) => {
    if (board.hasIn(coords) === false){
      return null;
    } else {
      return prev;
    }
  }, 'draw') // should return either null or 'draw'

};

export default function reducer(state = initialState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case MOVE:

      newState.board = newState.board.setIn(action.position, action.player);
      newState.turn = newState.turn === 'X' ? 'O' : 'X';
      newState.winner = winner(newState.board);
      console.log(newState.winner);
      return newState;
    default:
      return state;
  }
}
