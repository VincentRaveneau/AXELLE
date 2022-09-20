import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'


function App() {

  const audio = new Audio('HB.mp3');

  const Start = () => {
    audio.play()
  }
  Start()
  return (
    <div className="App">
      <header className="App-header">
        <img src="axelle.png" className="App-logo" alt="logo" />
        <p>
          T'es une ouf mais Joyeux anniversaire grande folle !
        </p>
        <Lien onClick={Start} href="Places_axelle.pdf" download="Joyeux Anniversaire Axelle.pdf">Prend ton cadeau et rend pas fou</Lien>
      </header>
    </div>
  );
}


const Lien = styled.a`
  display: flex;
  color: #348ceb;
  font-size: 40px;
`
export default App;
