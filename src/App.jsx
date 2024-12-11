import './App.css'
import Button from './Components/Button/Button.jsx'

function App() {
  return (
    <div className='App'>
      <div>
        <a className='Title'>
          Fisioboat
        </a>
      </div>
      <div className='Buttons'>
        <Button text='Jogar !' />
        <Button text='Estatisticas' />
        <Button text='Configurações' />
        <Button text='Sobre' />
      </div>
    </div>
  )
}

export default App