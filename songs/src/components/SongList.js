import React from 'react'
import  { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component{

    renderList(){
        return this.props.songs.map((song) => {
            return(
                <div key = {song.title} className="item">
                    <div className="right floated content">
                        <button
                        onClick = {() => this.props.selectSong(song)} 
                        className="ui button primary">
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }

    render(){
        return <div className = 'ui divided list'>{this.renderList()}</div>
    }

}

const mapStateToProp = (state) => {
    console.log(state);
    return{songs: state.songs};
} 

export default connect(mapStateToProp, {selectSong: selectSong})(SongList)
