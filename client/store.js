import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './modules/user'
import learners from './modules/learners'
import instructor from './modules/instructor'

const reducer = combineReducers({
	user: user.reducers,
	learners: learners.reducers,
	instructor: instructor.reducers
})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
// export * from './user'
