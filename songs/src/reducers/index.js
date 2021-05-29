import { combineReducers } from 'redux';
    
const songsReducer = () => {
    return [
        {
            title: 'Song 01', 
            duration: '4:10'
        },
        {
            title: 'Song 02', 
            duration: '3:20'
        },
        {
            title: 'Song 03', 
            duration: '5:02'
        },
        {
            title: 'Song 04', 
            duration: '2:40'
        },
        {
            title: 'Song 05', 
            duration: '8:10'
        }
    ];
};


const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});