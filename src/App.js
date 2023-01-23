import './App.css';
import React from 'react';


class App extends React.Component {
  render() {
    return (
      <div>
        <span className='header'>
          <h1>developedByNat</h1>
          <button>Resume</button>
        </span>
        <div className='intro'>
          <h2>Hi, I'm Natasha!</h2>
          <h3>Author. Designer. Cat Mom.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis aliquet ex sed sagittis. Vestibulum quis nisi id nisl mattis aliquet in ut lacus. Proin eu finibus tellus, in gravida velit. Nunc egestas at arcu pharetra accumsan.</p>
          <div>
            <img src='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg' alt='domestic cat' className='portrait'/>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
