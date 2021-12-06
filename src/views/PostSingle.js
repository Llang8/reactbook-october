import React, { Component } from 'react'
import { useParams } from 'react-router';
import Post from '../components/Post'

export default class PostSingle extends Component {
    constructor() {
        super();
        console.log(this)
    }
    // params = useParams();

    render() {
        // console.log( this.params );
        return (
            <React.Fragment>
                {/* <Post /> */}
            </React.Fragment>
        )
    }
}
