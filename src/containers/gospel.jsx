import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import * as actions from '../store/actions'

const component = ({ test }) => (<div>

    <div>
        <h1>The Gospel</h1>
    </div>
    <div className="content scroll">
        <h3>God's rescue plan to save sinners</h3>
        <p>
            We have all sinned and broken God's commandments in some way or another,
            </p>
        <img className="align-center" src='/img/crowd.jpg' />
        <i className="quote">
            All have sinned, and come short of the glory of God <sub>Romans 3:23</sub>
        </i>

        <p>
            The consequences of sin are incredibly serious,
            </p>
        <img className="align-center" src='/img/hell.jpg' />
        <i className="quote">
            The soul that sinneth, it shall die <sub>Ezekiel 18:20</sub>
        </i>
        <i className="quote">
            All liars, shall have their part in the lake which burneth with fire and brimstone: which is the second death.<sub>Revelation 21:8</sub>
        </i>
        <h3>Justice must be served.</h3>
        <p>There is punishment due for your sin - and it must be paid. There is good news though,</p>
        <p>
            God provided a Way for you to be forgiven - and avoid the eternal penalty of sin. In other words,
        </p>
        <h3 className="emphasise"> God has thrown you a life line.
                </h3>
        <img className="align-center" src='/img/lifeline.jpg' />
        <i className="quote">
            But God demonstrates His own love toward us, in that while we were still sinners, Christ died for us <sub>Romans 5:8</sub>
        </i>
        <hr />
        <h3 className="emphasise">
            Jesus suffered and died, to take the penalty you deserve for your sin.
        </h3>
        <p>Simply put - You did the crime. Jesus paid the fine.</p>
        <img className="align-center" src='/img/blood.jpg' />
        <h3>So, what must you do to be saved?</h3>
        <ol>
            <li>
                <p>Achknowledge what Jesus has done on your behalf.</p>
                <i className="quote">
                    [Jesus] in whom we have redemption through his blood, the forgiveness of sins, according to the riches of his grace <sub>Ephesians 1:7</sub>
                </i>
            </li>
            <li>
                <p>Trust in Jesus' work on the cross to pay for your sin - recieve Jesus as your Lord and Saviour</p>
                <i className="quote">
                    if you confess with your mouth Jesus as Lord, and believe in your heart that God raised Him from the dead, you will be saved
                <sub>Romans 10:9</sub>
                </i>
            </li>
            <li>
                <p>Choose His way of life rather than your own - turn (repent) from things that offend Him (sin) and walk in His ways</p>
                <i className="quote">
                    If any man will come after me, let him deny himself, and take up his cross daily, and follow me.
                <sub>Luke 9:23</sub>
                </i>
            </li>
        </ol>
        <hr />
        <h3>Would you like to know more?</h3>
        <form>
            <label>Your name</label>
            <input type="text" />
            <label>Your phone or email</label>
            <input type="text" />
            <button className="btn">Send</button>
        </form>
        <br/>
        <br/>
        <Link to='/' className="btn">Start over</Link>
    </div>
</div>)

export default connect(state => ({
    test: state.test,
}), dispatch => ({
    answer: (answer) => dispatch(actions.answerJudgement(question, answer)),
}))(component)