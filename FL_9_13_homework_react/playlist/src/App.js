import React, { Component } from "react";
import "./App.css";
import PlayList from "./components/playList";

class App extends Component {
  state = {
    all: [],
    favourite: [],
  };
    componentDidMount() {
        fetch("https://fl-homework-api.firebaseio.com/mozart.json").then(
            response => {
                response
                    .json()
                    .then(function(data) {
                        return data;
                    })
                    .then(data => {
                        this.setState({ all: data });
                    });
            }
        );
    }
  handleHeartClick = songId => {
    const song = this.state.all.map(song => {
      if (song.id === songId) {
        if (song.liked === false) {
          song.liked = true;
          this.state.favourite.push(song);
          this.setState({ song });
        } else {
          song.liked = false;
          let index = this.state.favourite.indexOf(song);
          this.state.favourite.splice(index, 1);
          this.setState({ song });
        }
      }
    });
    this.setState({ song });
  };

  handlePlayClick = songId => {
    const song = this.state.all.map(song => {
      if (song.id === songId) {
        if (song.play === false) {
          song.play = true;
            this.handlePlaySong(songId);
        } else {
          song.play = false;
        }
      } else {
        song.play = false;
      }
    });
    this.setState({ song });
  };
handlePlaySong=(songId)=>{

};
  playPause=() =>{
        let myVideo = document.getElementById("video");
        if (myVideo.paused)
            myVideo.play();
        else
            myVideo.pause();
    };
  prevSong=()=>{

  };
  nextSong=()=>{};

  render() {
let image=<i className={'fas fa-play playButton'}></i>;
    return (
      <React.Fragment>
        <div className={"container-fluid"}>
          <div className={"row"}>
            <div className={"col-md-4"}>
                <div>
                    <button onClick={this.prevSong}><i className="fas fa-angle-left"></i></button>
                    <button onClick={this.playPause}>{image}</button>
                    <button onClick={this.nextSong}><i className="fas fa-angle-right"></i></button>
                <br/><br/>
              <video width="400" id={'video'}>
                <source src="https://firebasestorage.googleapis.com/v0/b/fl-homework-api.appspot.com/o/mozart%2Famclassical_beethoven_fur_elise.mp3?alt=media&token=5c50bdfa-877a-4c85-9d1a-1a7262f587d2" />
              </video>
              </div>
            </div>
            <div className={"col-md-8"}>
              <PlayList
                key={1}
                songInfo={this.state}
                onLike={this.handleHeartClick}
                onPlay={this.handlePlayClick}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
