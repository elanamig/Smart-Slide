import * as action from './actionTypes'
import socket from '../../socket'

export const initialLearners = learners => {
	return {type: action.INITIAL_LEARNERS, learners}
}
export const makeCurrent = learner => {
	return {type: action.MAKE_CURRENT, learner}
}
export const getLearner = learner => {
	return {type: action.GET_LEARNER, learner}
}
export const removeLearner = id => {
	return {type: action.REMOVE_LEARNER, id}
}
