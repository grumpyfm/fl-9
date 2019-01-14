import React, { Component } from "react";

class Song extends Component {

  render() {
    console.log('render song',this.props.info);

    return <div className={"container songItem"}>{this.renderSong()}</div>;
  }

  renderSong() {
    let buttonClass;
    let favouriteClass;
    const {title, author, play, liked} = this.props;

    if (play === false) {
      buttonClass = "fas fa-play";
    } else {
      buttonClass = "fas fa-pause";
    }
    if (liked === false) {
      favouriteClass = "far fa-heart";
    } else {
      favouriteClass = "fas fa-heart";
    }
    return (
      <div className={"row"}>
        <div className={"col-md-1 align-self-center icons"}>
          <i
            onClick={() => {
              this.props.onPlay(this.props.id);
            }}
            className={buttonClass}
          />
        </div>

        <div className={"col-md-10"}>
          <p>{title}</p>
          <p>{author}</p>
        </div>
        <div className={"col-md-1 align-self-center icons"}>
          <i
            onClick={() => {
              this.props.onLike(this.props.id);
            }}
            className={favouriteClass}
          />
        </div>
      </div>
    );
  }
}

export default Song;
