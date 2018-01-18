import * as actions from './actionTypes'

const defaultUser = {}

export default function (state = defaultUser, action) {
  switch (action.type) {
    case actions.GET_USER:
      return action.user
    case actions.REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
