import { Map } from 'immutable';

// let board = Map();

// ACTIONS
const MOVE = 'MOVE';
const START = 'START';

// ACTION CREATORS
export const move = (turn, position) => {
  return {
    type: MOVE,
    position,
    player: turn,
  };
};

export const start = () => {
  return {
    type: START,
  };
};

const initialState = {
  board: Map(),
  turn: 'X',
};

// Function winner
const streak = (board, firstCoord, secondCoord, thirdCoord) => {
  // check if (0,0), (0,1), (0,2) are all X's
  // if(board[[firstCoord[0],firstCoord[1]] ){
  // }
  // state.board is a map object
};
const winner = board => {
  // for (let r = 0; r != 3; ++r) {
  //   for (let c = 0; c != 3; ++c) {
  //   }
  // }
  // horizontal
  // call streak with coordinates (0,0), (0,1), (0,2)
  // call streak with coordinates (1,0), (1,1), (1,2)
  // call streak with coordinates (2,0), (2,1), (2,2)
  // vertical
  // call streak with coordinates (0,0), (1,0), (2,0)
  // call streak with coordinates (0,1), (1,1), (2,1)
  // call streak with coordinates (0,2), (1,2), (2,2)
  // diagonal
  // call streak with coordinates (0,0), (1,1), (2,2)
  // call streak with coordinates (0,2), (1,1), (2,0)
};

export default function reducer(state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case MOVE:
      // console.log('board', state.board.get());
      // console.log('board', state.board.get(state.board, 2));
      newState.board = newState.board.setIn(action.position, action.player);
      newState.turn = newState.turn === 'X' ? 'O' : 'X';
      return newState;
    default:
      return state;
  }
}
