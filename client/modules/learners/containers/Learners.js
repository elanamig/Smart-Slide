import React from 'react';
import socket from '../../../socket'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {newLearner,makeCurrent} from "../actions"

import Wrapper from '../components/Wrapper'

const Learners = (props) => {
	return <Wrapper {...props}/>
}

function mapStateToProps(state,props){
  return {
    learners: state.learners,
		instructor: state.instructor
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({newLearner,makeCurrent},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Learners)
