import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import * as actions from '../store/actions'

const component = ({ test }) => (<div>
    <h3>Gospel</h3>
    <p>
        All have sinned and fall short of the glory of God
    </p>
    <form>
        <div>
            <label>Your name</label>
            <input type="text" />
        </div>
        <div>
            <label>Your phone or email</label>
            <input type="text" />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
</div>)

export default connect(state => ({
    test : state.test,
}), dispatch => ({
    answer : (answer) => dispatch(actions.answerJudgement(question, answer)),
}))(component)