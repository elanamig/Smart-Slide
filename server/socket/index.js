
let learners = []
let instructor = null

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)
    socket.emit('getInitialData', {learners, instructor})
    socket.on('addInstructor', (instructorName) => {
      instructor = instructorName
      io.emit('getInstructor', instructorName)
    })
    socket.on('disconnect', () => {
      learners = learners.filter(learner => learner.socketId !== socket.id)
      io.emit('removeLearner', socket.id)
    })
    socket.on('addLearner', (name) => {
      console.log(socket.id)
      const newLearner = {
        socketId: socket.id,
        name
      }
      learners.push(newLearner)
      io.emit('getLearner', newLearner)
    })
  })
}
