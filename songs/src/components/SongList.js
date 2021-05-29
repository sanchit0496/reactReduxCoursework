import React from 'react'
import  { connect } from 'react-redux';

class SongList extends React.Component{
    render(){
        console.log(this.props);
        return <div>SongList</div>
    }
}

const mapStateToProp = (state) => {
    return{songs: state.songs};
} 

export default connect(mapStateToProp)(SongList)
