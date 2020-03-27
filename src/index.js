import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                <h4>Warning!</h4>
                Are you sure you want to do this?
                </div>
            </ApprovalCard>


            <ApprovalCard> 
                <CommentDetail author="Sam" timeAgo="Today at 3:03 PM" avatar={faker.image.avatar()} comment="Nice blog post!" />
            </ApprovalCard>
            <ApprovalCard> 
                <CommentDetail author="Logan" timeAgo="Yesterday at 6:49 AM" avatar={faker.image.avatar()} comment="Wow that's awesome!" />
            </ApprovalCard>
            <ApprovalCard> 
                <CommentDetail author="Vladimir" timeAgo="Today at 9:22 PM" avatar={faker.image.avatar()} comment="Just a random comment" />
            </ApprovalCard>
            
        </div>
        );
};

ReactDOM.render(<App />, document.querySelector('#root'));