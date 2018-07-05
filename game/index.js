import {Map} from 'immutable'


let board = Map()

// ACTIONS
const MOVE = 'MOVE'
const START = 'START'

// ACTION CREATORS
export const move = (turn, [row, col]) => {
  return {
    type: MOVE,
    position: [row, col],
    player: turn
  }
}

export const start = () => {
  return {
    type: START
  }
}

const initialState = {
  board: board,
  turn: 'X'
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START :
      return state;
    case MOVE :
      return {
        board: state.board.setIn(action.position, action.player),
        turn: state.turn === 'X' ? 'O' : 'X'
      }
    default:
      return state;
  }
}

