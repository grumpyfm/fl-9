import React, { Component } from "react";
import Song from "./song";

class PlayList extends Component {
  render() {
    return (
      <div className={"container"}>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            className="nav-item nav-link active"
            id="nav-home-tab"
            data-toggle="tab"
            href="#nav-home"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            AllSongs
          </a>
          <a
            className="nav-item nav-link"
            id="nav-profile-tab"
            data-toggle="tab"
            href="#nav-profile"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Favourite
          </a>
        </div>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            {this.props.songInfo.all.map(song => (
              <Song
                key={song.id}
                id={song.id}
                title={song.title}
                author={song.author}
                play={song.play}
                liked={song.liked}
                onPlay={this.props.onPlay}
                onLike={this.props.onLike}
              />
            ))}
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            {this.props.songInfo.favourite.map(song => (
              <Song
                key={song.id}
                id={song.id}
                title={song.title}
                author={song.author}
                play={song.play}
                liked={song.liked}
                onPlay={this.props.onPlay}
                onLike={this.props.onLike}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PlayList;
