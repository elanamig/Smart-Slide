import * as actions from './actionTypes'


export default function (state = {name: null}, action) {
  switch (action.type) {
    case actions.GET_INSTRUCTOR:
      return {...state, name: action.instructor}
    default:
      return state
  }
}
