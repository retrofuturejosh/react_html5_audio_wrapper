import React from 'react';
import ReactDOM from 'react-dom';
import { AudioPlayer } from './components/audioPlayer'

const audioFiles = [
  {
    src: "/My Head.mp3",
    title: "My Head",
    artist: "Kimmi More"
  },
  {
    src: "/One Night.mp3",
    // artist: "Kimmi Moooooooooooooooooooooore",
    title: "One Night"
  }
]

const audioFiles2 = [
  { src: "/One Night.mp3",
  artist: "Artist Name",
  title: "Title of Song" }
]

let rearrangedPlayer = [
  {
    className: "Top Tier",
    style: {margin: "0.3rem"},
    innerComponents: [
      { 
        type: "play",
        style: {width: "fit-content"}
      },
      {
        type: "rewind",
        style: {width: "fit-content"}
      },
      {
        type: "forward",
        style: {width: "fit-content"}
      },
      {
        type: "volume"
      }
    ]
  },
  {
    className: "Bottom Tier",
    style: {margin: "0rem 0.3rem 0.3rem 0.3rem"},
    innerComponents: [
      {
        type: "time",
        style: {width: "fit-content"}
      },
      {
        type: "seek"
      }
    ]
  }
]

const rearrangeTest = [
  { className: "One",
    style: {marginBottom: "0.3em"},
    innerComponents: [
      { type: "name" }
    ]
  }, 
  { className: "Two",
    style: {marginBottom: "0.3em"},
    innerComponents: [
      { type: "play",
        style: {justifyContent: "center"}},
      { type: "rewind",
        style: {justifyContent: "center"}}, 
      { type: "forward",
        style: {justifyContent: "center"}},
      { type: "loop",
        style: {justifyContent: "center"}}
    ]
  }, 
  { className: "Three",
    style: {marginBottom: "0.3em"},
    innerComponents: [
      { type: "time",
        style: {width: "fit-content"} },
      { type: "seek"}
    ]
  },
  { className: "Four",
  innerComponents: [
      {type : "volume"}
    ]
  }  
]

ReactDOM.render(
    /* <AudioPlayer
      audioFiles={audioFiles}
      // playIcon="/play-light.png"
      // playHoverIcon="/play-dark.png"
      // pauseIcon="/pause-light.png"
      // pauseHoverIcon="pause-dark.png"
      // volumeIcon="/volume.png"
      // muteIcon="/mute.png"
      // muteEngagedIcon="/mute-dark.png"
      // volumeEngagedIcon="/volume-dark.png"
      // forwardIcon="/forward-ref.png"
      // forwardHoverIcon="/forward-hover-ref.png"
      // rewindIcon="/forward-ref.png"
      // rewindHoverIcon="/forward-hover-ref.png"
      // fontFamily="serif"
      // fontSize="larger"
      // fontColor="red"
      // fontWeight="bolder"
      // iconSize="2em"
      // sliderClass="my-slider"
      playerWidth="25rem"
      // hideSeeking={true}
      // hideForward={true}
      // hideLoop={true}
      // loopPlaylist={true}
      // hideRewind={true}
      // hideTime={true}
      // hideName={true}
      /> */
      // <AudioPlayer
      //   audioFiles={audioFiles}
      // />
      <AudioPlayer
        audioFiles={audioFiles2}
        iconSize="1.5rem"
        playerWidth="10em"
        rearrange={rearrangedPlayer}
        fontSize="1.5rem"
      />
      // <AudioPlayer
      // audioFiles={audioFiles2}
      // />
      ,
  document.getElementById('app')
)
