import * as actions from './actionTypes'


export default function (state = {current: null, list: []}, action) {
  switch (action.type) {
		case actions.GET_LEARNER:
      return {...state, list: [...state.list, action.learner]}
		case actions.MAKE_CURRENT:
      return {...state, current: action.learner}
		case actions.INITIAL_LEARNERS:
	      return {...state, list: [...state.list, ...action.learners]}
		case actions.REMOVE_LEARNER:
			console.log(state.list.filter(learner => learner.socketId !== action.id))
	    return {...state, list: state.list.filter(learner => learner.socketId !== action.id)}
    default:
      return state
  }
}
