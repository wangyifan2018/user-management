import './App.css';
import { AppRouter } from './routes/AppRouter';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
