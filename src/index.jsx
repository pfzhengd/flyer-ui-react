import React from 'react';
import ReactDOM from 'react-dom';

//声明一个时钟组件
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // getDefaultProps(){
  //   console.log('getDefaultProps');
  // }

  getInitialState(){
    console.log('getInitialState');
  }

  componentWillMount(){
    console.log('componentWillMount');
  }


  tick() {
    this.setState({ date: new Date() });
  }

  //当组件挂载完成时
  componentDidMount() {
    console.log('componentDidMount');
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  //当组件要释放内存空间时
  componentWillUnmount() {
    console.log('componentDidMount');
    clearInterval(this.timer);
  }

  render() {
    console.log('render');
    return (
      <h1>当时时间：{this.state.date.toLocaleTimeString()}</h1>
    )
  }

}

let div = document.createElement('div');
document.body.appendChild(div);
ReactDOM.render(<Clock />, div);