import io from 'socket.io-client'
import store from './store';
import learners from './modules/learners'
import instructor from './modules/instructor'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!')
})
socket.on('getInitialData', (data) => {
  store.dispatch(learners.actions.initialLearners(data.learners))
  store.dispatch(instructor.actions.getInstructor(data.instructor))
})
socket.on('getLearner', (learner)=>{
  store.dispatch(learners.actions.getLearner(learner))
})
socket.on('getInstructor', (name)=>{
  store.dispatch(instructor.actions.getInstructor(name))
})
socket.on('removeLearner', (id)=>{
  store.dispatch(learners.actions.removeLearner(id))
})
export default socket
