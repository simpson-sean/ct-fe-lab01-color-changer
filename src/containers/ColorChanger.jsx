import React, { Component } from 'react';
import Display from '../components/random-color/Display.jsx';

const colors = [
  'red', 
  'blue', 
  'yellow', 
  'gray', 
  'black', 
  'magenta', 
  'maroon', 
  'mint', 
  'aqua', 
  'gold', 
  'beige'
];


export default class ColorChanger extends Component {
    state = {
        rdmColor: 'yellow',
    }

    changeColor = () => {
        const randomColorIndex = Math.floor(Math.random() * colors.length)
        if(colors[randomColorIndex] === this.state.rdmColor) {
            this.setState({rdmColor: 'url(https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg)'});
        } else {
        this.setState({rdmColor: colors[randomColorIndex]})
        }
    }

    componentDidMount() {
        setInterval(() => this.changeColor(), 1000)
    }
    render() {
        return (
            <Display rdmColor={this.state.rdmColor}/>
        )
    }
}
