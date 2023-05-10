import React, { Component } from 'react';
import myImage from './pic/my-image.jpg';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Testouri Hichem",
        bio: "studen in GoMyCode ",
        imgSrc: myImage ,
        profession: "Web Developer"
      },
      shows: true
    };
  }
  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows } = this.state;

    return (
      <div>
        {shows ? (
          <>
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <img src={myImage} alt={"me"} />
            <p>{profession}</p>
          </>
        ) : (
          <p>NOTH HERE CLICK BELOW !!</p>
        )}
        <button onClick={() => this.setState({ shows: !shows })}>
          Hide/show 
        </button>
      </div>
    );
  }
}

export default App;
