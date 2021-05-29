import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({mySelectedSong}) => {
    if(!mySelectedSong){
        return <div>Select a song to continue</div>
    }
    return (
        <div>
            <h3>Details:</h3>
            <p>
                Title: {mySelectedSong.title} <br></br>
                Duration: {mySelectedSong.duration}
            </p>
        </div>
    )
 }

const mapStateToProps = state => {
     return {mySelectedSong: state.selectedSong};
}

export default connect(mapStateToProps)(SongDetail);