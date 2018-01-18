import * as action from './actionTypes'
import socket from '../../socket'

export const getInstructor = instructor => {
	return {type: action.GET_INSTRUCTOR, instructor}
}
