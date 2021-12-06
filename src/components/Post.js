import React, { Component } from 'react'

export default class Post extends Component {
    
    render() {

        // console.log( this.props );
        const p = this.props.p;

        return (
            <li className="list-group-item">
                <p><a href=".">{ p.body }</a></p>
                <p>
                    <cite>&mdash; { p.user.emailAddress }</cite>
                    <span className="float-right">
                        <small>2 seconds ago</small>
                    </span>
                </p>
            </li>
        )
    }
}
