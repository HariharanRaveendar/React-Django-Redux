import React, { Component,Fragment} from 'react';
import PostArticle from './PostArticle';
import Articles from './Articles';
export class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <PostArticle />
                <Articles />
                </Fragment>
        )
    }
}

export default Dashboard
