import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    return(
        <div>
            <CommentDetail name = "Mohit" date = "Two Days Ago" text = "Informative"/>
            <CommentDetail name = "Myra" date = "Three Days Ago" text = "Knowledgable"/>
            <CommentDetail name = "Advik" date = "Four Days Ago" text = "Factual"/>
            <CommentDetail name = "Aaryan" date = "Five Days Ago" text = "Interesting"/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));