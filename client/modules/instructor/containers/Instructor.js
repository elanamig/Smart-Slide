import React from 'react';
import socket from '../../../socket'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Wrapper from '../components/Wrapper'

const Instructor = (props) => {
	return <Wrapper {...props} />
}

function mapStateToProps(state,props){
  return {
    user: state.user,
		learners: state.learners,
		instructor: state.instructor
  }
}
// function mapDispatchToProps(dispatch){
//   return bindActionCreators({activateAppraisal,createSelfAssessment,updateAppraisal,getTeam,futureGoals,managerAssessment,getCurrent,getCompleted,getCurrentlyViewed},dispatch)
// }

export default connect(mapStateToProps)(Instructor)
