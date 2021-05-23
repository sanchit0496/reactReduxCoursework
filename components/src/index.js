import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App = () => {
    return(
        <div>
            <ApprovalCard>
                <CommentDetail name = "Mohit" date = "Two Days Ago" text = "Informative"/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail name = "Myra" date = "Three Days Ago" text = "Knowledgable"/>
            </ApprovalCard>
    
            <ApprovalCard>
                <CommentDetail name = "Advik" date = "Four Days Ago" text = "Factual"/>
            </ApprovalCard>
        
            <ApprovalCard>
                <CommentDetail name = "Aaryan" date = "Five Days Ago" text = "Interesting"/>
            </ApprovalCard>


        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));