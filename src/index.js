import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">

            <CommentDetail author="Sam" timeAgo="Today at 3:03 PM" avatar={faker.image.avatar()} comment="Nice blog post!" />
            <CommentDetail author="Logan" timeAgo="Yesterday at 6:49 AM" avatar={faker.image.avatar()} comment="Wow that's awesome!" />
            <CommentDetail author="Vladimir" timeAgo="Today at 9:22 PM" avatar={faker.image.avatar()} comment="Just a random comment" />

        </div>
        );
};

ReactDOM.render(<App />, document.querySelector('#root'));