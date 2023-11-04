import './App.css';
import MuiButton from '../components/MuiButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is React based boilerplate app.
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/groups/12900073/"
          target="_blank"
          rel="noopener noreferrer"
        >
          DTI CODING | PROJECT CLUB
        </a>
        <MuiButton>Lost Something</MuiButton>
        <MuiButton>Found Something</MuiButton>
      </header>
    </div>
  );
}

export default App;
