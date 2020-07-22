import React from 'react';
import logo from './logo.svg';
import './App.css';
import './color.css';

export default class App extends React.Component {
  componentDidMount () {
    document.documentElement.setAttribute('data-skin', window.localStorage.getItem('activeSkinKey'))
  }
  render () {
    const changeStyle=(key)=>{
      console.log(key);
      document.documentElement.setAttribute('data-skin', key)
      window.localStorage.setItem('activeSkinKey',key)
    }
    return (
      <div className="App">
        {/*换肤start*/}
        <div>
          <button onClick={()=>{changeStyle('black')}}>黑色</button>
          <button onClick={()=>{changeStyle('green')}}>绿色</button>
          <button onClick={()=>{changeStyle('yellow')}}>黄色</button>
        </div>
        {/*换肤end*/}
      </div>
    )
  }
}
