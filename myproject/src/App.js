import './App.css';
import React from 'react';
import myImage from './imageeInSrc.jpg'

const styleObject = {height:400, width:650};
const style = {textAlign:"center"}
const click = {color:"white", backgroundColor:"red", padding:10, borderRadius:30,border:0,marginLeft:500,marginTop:30,}
class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false ,
      fullName: "Elyes Marzouki",
      bio: "J'aime tout truc qui nécessite de la créativité",
      profession: "developpeur",
      imgSrc:<img src={myImage} alt="Profilpicture" style={styleObject}/>,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      show: !state.show
    }));
  }
  render(){
    return(
      <>
      <button style={click} onClick={this.handleClick}>Click me to toggle the show state</button>
      {this.state.show ? <h1 style={style}>{this.state.imgSrc}<br/>Je m'appelle {this.state.fullName}, je travaille en tant que {this.state.profession} et voici ma bio: {this.state.bio}.</h1>: null }
      </>
    )
  }
}

export default Greeting