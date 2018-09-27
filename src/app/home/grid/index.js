import React from 'react'
import { connect } from 'react-redux'

/** */
import Grid from './Grid'

const mapStateToProps = state => ({
    tasks: state.tasks
})

export default connect(
    mapStateToProps
)(Grid)