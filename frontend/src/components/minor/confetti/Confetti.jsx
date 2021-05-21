import React from "react"
import ReactDOM from "react-dom"

let COLORS = ['#2ecc71','#3498db','#e67e22','#e67e22','#e74c3c'];
let TOP_OFFSET = window.innerHeight;
let LEFT_OFFSET = 250;

const generateWholeNumber = (min, max) => min + Math.floor(Math.random()*(max - min));

const generateRandomColor = () => COLORS[generateWholeNumber(0,COLORS.length)];

class CircularParticle extends React.PureComponent {
  
  static SIZE_RANGE = [5, 10];
  static ROTATION_RANGE = [0, 45];

  constructor(props) {
    super(props);
    const {SIZE_RANGE, ROTATION_RANGE} = CircularParticle;
    const size = generateWholeNumber(...SIZE_RANGE);
    this.style = {
      backgroundColor: generateRandomColor(),
      width: size,
      height: size,
      borderRadius: size,
      transform: `rotateZ(${generateWholeNumber(...ROTATION_RANGE)}deg)`,
      left: generateWholeNumber(0, window.innerWidth),
      top: generateWholeNumber(-TOP_OFFSET, 0)
    };
  }

  componentDidMount() {
    const {left} = this.style;
    setTimeout(() => {
      const node = ReactDOM.findDOMNode(this.ref);
      node.style.top = window.innerHeight + generateWholeNumber(0, TOP_OFFSET) + 'px';
      node.style.left = left + generateWholeNumber(-LEFT_OFFSET, LEFT_OFFSET) + 'px';
    },0);
  }
  
  render() {
    
    return (
      <div ref={ref => this.ref = ref} className='particle' style={this.style}/>
    );
  }
}

class SquiggleParticle extends React.PureComponent {
  
  static SIZE_RANGE = [15, 45];
  static ROTATION_RANGE = [-15, 15];

  constructor(props) {
    super(props);
    const size = generateWholeNumber(...SquiggleParticle.SIZE_RANGE);
    this.style = {
      fill: generateRandomColor(),
      width: size,
      height: size,
      transform: `rotateZ(${generateWholeNumber(...SquiggleParticle.ROTATION_RANGE)}deg)`,
      left: generateWholeNumber(0, window.innerWidth),
      top: generateWholeNumber(-TOP_OFFSET, 0)
    };
  }

  componentDidMount() {
    const {left} = this.style;
    const {ROTATION_RANGE} = SquiggleParticle;
    setTimeout(() => {
      const node = ReactDOM.findDOMNode(this.ref);
      node.style.top = window.innerHeight + generateWholeNumber(0, TOP_OFFSET) + 'px';
      node.style.left = left + generateWholeNumber(-LEFT_OFFSET, LEFT_OFFSET) + 'px';
      node.style.transform = `rotateZ(${generateWholeNumber(...ROTATION_RANGE)}deg)`;
    },0);
  }

  render() {
    return (
      <svg 
        ref={ref => this.ref = ref} 
        className='particle'
        style={this.style}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512">
        <path fill={this.style.fill} d="M428.127,0l-12.716,10.062l12.718-10.06c8.785,11.101,19.716,24.917,19.716,51.051 s-10.932,39.951-19.716,51.053c-7.382,9.331-12.716,16.072-12.716,30.927c0,14.854,5.334,21.594,12.716,30.925   c8.784,11.101,19.716,24.917,19.716,51.05c0,26.135-10.931,39.949-19.715,51.051c-7.383,9.331-12.717,16.072-12.717,30.927   c0,14.855,5.332,21.593,12.711,30.919l-25.435,20.124c-8.781-11.097-19.708-24.909-19.708-51.042 c0-26.135,10.931-39.949,19.715-51.051c7.383-9.331,12.717-16.072,12.717-30.927c0-14.855-5.335-21.595-12.717-30.926 c-8.784-11.101-19.715-24.916-19.715-51.049s10.931-39.95,19.715-51.051c7.383-9.331,12.717-16.072,12.717-30.928 c0-14.855-5.335-21.596-12.718-30.927L428.127,0z"/>
        </svg>
    );
  }
}

class Particles extends React.PureComponent {
  
  render() {
    let {count: n} = this.props;
    const particles = [];
    const types = [SquiggleParticle, CircularParticle, CircularParticle];
    
    while(n--) {
      const Particle = types[generateWholeNumber(0,3)];
      particles.push(
        <Particle key={n}/>
      );
    }
    
    return (
      <div className='particles'>
        {particles}
      </div>
    );
  }
}

class Appp extends React.PureComponent {
  
  static id = 1;

  constructor(props) {
    super(props);
    
    this.state = {particles: []}
  }

  clean(id) {
    this.setState({
      particles: this.state.particles.filter(_id => _id !== id)
    });
  }
  
  handleOnClick = () => {
    const id = Appp.id;
    Appp.id++;
    
    this.setState({
      particles: [...this.state.particles, id]
    });
    setTimeout(() => {
      this.clean(id);
    }, 5000);
  }
  
  render() {
    const {particles} = this.state;
    const {innerWidth} = window
    
    return (
      <div className='appp'>
        {particles.map(id => (
          <Particles key={id} count={Math.floor(innerWidth / 20)}/>
        ))}
        <div className='button' onClick={this.handleOnClick}>
          <div className='popper'/>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="30" height="45" viewBox="0 0 44 59"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0,59) scale(0.1,-0.1)"
            fill="#0250bd" stroke="none">
            <path d="M270 548 c-136 -52 -250 -236 -250 -403 0 -85 7 -101 51 -125 46 -24
            80 -25 117 -6 44 23 192 181 192 205 0 11 -5 21 -11 21 -6 0 -49 -36 -96 -80
            -90 -85 -135 -115 -160 -106 -13 5 -15 21 -11 84 5 94 44 175 125 262 60 66
            153 122 153 94 0 -10 -6 -25 -14 -33 -13 -14 -12 -18 10 -28 22 -10 26 -8 41
            13 25 39 24 70 -4 99 -32 31 -68 32 -143 3z m-184 -324 c-20 -56 -25 -63 -25
            -38 -1 49 31 126 46 110 2 -1 -8 -34 -21 -72z"/>
            </g>
            </svg>
        </div>
      </div>
    );
  }
}

function Confeti() {
    return (
        <>
            <Appp/>
        </>
    )
}

export default Confeti
